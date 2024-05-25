"use client"
import React, { useState } from 'react';
import styles from "./index.module.css";

const FilterArticle = () => {
    const [genres, setGenres] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState('');

    const fetchGenres = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 5be080d55fb624a9be8a5efac01b923c625a2810");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://dingoo-python-xe66lnoifa-uc.a.run.app/mv/genres/", requestOptions)
            .then(response => response.json())
            .then(result => setGenres(result))
            .catch(error => console.error(error));
    };

    const handleFocus = () => {
        setShowDropdown(true);
        fetchGenres();
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowDropdown(false);
        }, 200); // Delay to allow click event on dropdown items
    };

    const handleSelectGenre = (genreName) => {
        setSelectedGenre(genreName);
        setShowDropdown(false);
    };

    return (
        <>
            <div className={styles.border}></div>
            <div className={styles.filtercontainer}>
                <div className={styles.datesFilter}>
                    <div className={styles.alertText}>
                        <h1>Filters</h1>
                        <img src="/utils/icons/alert-circle.svg" />
                    </div>
                    <div className={styles.dateLabel}>Create Date (from & to)</div>
                    <input type='date' className={styles.pickdates} />
                    <input type='date' className={styles.pickdates} />
                </div>
                <div className={styles.inputBorder}></div>

                <div className={styles.datesFilter}>
                    <div className={styles.alertText}>
                        <h1>Type</h1>
                        <img src="/utils/icons/alert-circle.svg" />
                    </div>
                    <div className={styles.category}>
                        <label>Genre</label>
                        <div className={styles.inputWithIcon}>
                            <input 
                                value={selectedGenre}
                                placeholder='Embrace Limitless Cloud Storage' 
                                onFocus={handleFocus} 
                                onBlur={handleBlur}
                                readOnly
                            />
                            <img 
                                src={showDropdown ? "/utils/icons/downarrow.svg" : "/utils/icons/uparrow.svg"} 
                                alt="Dropdown Icon" 
                                className={styles.dropdownIcon}
                            />
                        </div>
                        {showDropdown && (
                            <div className={styles.dropdown}>
                                {genres.map((genre) => (
                                    <div 
                                        key={genre.id} 
                                        className={styles.dropdownItem}
                                        onClick={() => handleSelectGenre(genre.name)}
                                    >
                                        {genre.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.category}>
                        <label>Search movies</label>
                        <input placeholder='Search.....' />
                    </div>
                </div>
                <div className={styles.inputBorder}></div>
                <button className={styles.loginButton}>
                    <img src="/utils/icons/filterSearch.svg" alt="Logo" />
                    <span>Search</span>
                </button>
            </div>
        </>
    )
}

export default FilterArticle;
