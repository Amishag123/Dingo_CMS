import React from 'react'
import styles from "./index.module.css"

const AddNewArticle = () => {
    return (
        <main className={styles.addNewArticleContainer}>
            <div className={styles.addNewArticle}>
                <h1>Articles</h1>
                <button className={styles.loginButton}>
                    <img src="/utils/icons/login.svg" alt="Logo" />
                    <span>Add new</span>
                </button>
            </div>
            <div className={styles.checkArticlesDetails}>
                <div className={styles.articleHolderDetails}>
                    <div>
                        <img src="/utils/images/uploadedArticleImage.png" alt="Logo" />
                    </div>
                    <div className={styles.holderName}>
                        <h1>Embrace Limitless Cloud Storage</h1>
                        <span>Last Update: 10 Jan, 2024</span>
                    </div>

                </div>
                <span>Aneesh Bond</span>
                <img src="/utils/icons/edit.svg" alt="Logo" />
            </div>
            <div className={styles.checkArticlesDetails}>
                <div className={styles.articleHolderDetails}>
                    <div>
                        <img src="/utils/images/uploadedArticleImage.png" alt="Logo" />
                    </div>
                    <div className={styles.holderName}>
                        <h1>Embrace Limitless Cloud Storage</h1>
                        <span>Last Update: 10 Jan, 2024</span>
                    </div>

                </div>
                <span>Aneesh Bond</span>
                <img src="/utils/icons/edit.svg" alt="Logo" />
            </div>
            <div className={styles.checkArticlesDetails}>
                <div className={styles.articleHolderDetails}>
                    <div>
                        <img src="/utils/images/uploadedArticleImage.png" alt="Logo" />
                    </div>
                    <div className={styles.holderName}>
                        <h1>Embrace Limitless Cloud Storage</h1>
                        <span>Last Update: 10 Jan, 2024</span>
                    </div>

                </div>
                <span>Aneesh Bond</span>
                <img src="/utils/icons/edit.svg" alt="Logo" />
            </div>
            <div className={styles.checkArticlesDetails}>
                <div className={styles.articleHolderDetails}>
                    <div>
                        <img src="/utils/images/uploadedArticleImage.png" alt="Logo" />
                    </div>
                    <div className={styles.holderName}>
                        <h1>Embrace Limitless Cloud Storage</h1>
                        <span>Last Update: 10 Jan, 2024</span>
                    </div>

                </div>
                <span>Aneesh Bond</span>
                <img src="/utils/icons/edit.svg" alt="Logo" />
            </div>
            <div className={styles.checkArticlesDetails}>
                <div className={styles.articleHolderDetails}>
                    <div>
                        <img src="/utils/images/uploadedArticleImage.png" alt="Logo" />
                    </div>
                    <div className={styles.holderName}>
                        <h1>Embrace Limitless Cloud Storage</h1>
                        <span>Last Update: 10 Jan, 2024</span>
                    </div>

                </div>
                <span>Aneesh Bond</span>
                <img src="/utils/icons/edit.svg" alt="Logo" />
            </div>
            <button className={styles.loadmoreButton}>
                <span>Load more</span>
            </button>
          
        </main>
    )
}

export default AddNewArticle