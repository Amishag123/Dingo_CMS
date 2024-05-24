"use client"
import React, { useEffect, useState } from 'react';
import styles from "./index.module.css";

const AddNewArticle = () => {
    const [articles, setArticles] = useState([]);
    const [visibleArticles, setVisibleArticles] = useState(5); 

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 5be080d55fb624a9be8a5efac01b923c625a2810");
    
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
    
        fetch("https://dingoo-python-xe66lnoifa-uc.a.run.app/mv/movies/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log('Fetched articles:', JSON.stringify(result?.results));
                setArticles(result?.results.map(movie => movie.moviedata));
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const loadMore = () => {
        setVisibleArticles(prevVisibleArticles => prevVisibleArticles + 5);
    };

    return (
        <main className={styles.addNewArticleContainer}>
            <div className={styles.addNewArticle}>
                <h1>Articles</h1>
                <button className={styles.loginButton}>
                    <img src="/utils/icons/login.svg" alt="Logo" />
                    <span>Add new</span>
                </button>
            </div>
            {articles.length > 0 ? (
                articles.slice(0, visibleArticles).map(article => (
                    <div key={article.id} className={styles.checkArticlesDetails}>
                        <div className={styles.articleHolderDetails}>
                            <div className={styles.movieImages}>
                                <img src={article.poster || "/utils/images/uploadedArticleImage.png"} alt="Logo" />
                            </div>
                            <div className={styles.holderName}>
                                <h1>{article.intro_content || "Default Title"}</h1>
                                {/* <span>Last Update: {article.lastUpdate || "Unknown date"}</span> */}
                            </div>
                        </div>
                        <span>{article.author || "Unknown Author"}</span>
                        <img src="/utils/icons/edit.svg" alt="Edit" />
                    </div>
                ))
            ) : (
                <p>No articles available</p>
            )}

            {articles.length > visibleArticles && (
                <button className={styles.loadmoreButton} onClick={loadMore}>
                    <span>Load more</span>
                </button>
            )}
        </main>
    );
};

export default AddNewArticle;
