import React from 'react'
import styles from "./index.module.css"

const FilterArticle = () => {
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
                        <label>Category</label>
                        <input placeholder='Embrace Limitless Cloud Storage' />
                    </div>
                    <div className={styles.category}>
                        <label>Keywords</label>
                        <input placeholder='Embrace Limitless Cloud Storage' />
                    </div>


                    {/* <div className={styles.dateLabel}>Create Date (from & to)</div>
                    <input type='date' className={styles.pickdates} />
                    <input type='date' className={styles.pickdates} /> */}
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

export default FilterArticle