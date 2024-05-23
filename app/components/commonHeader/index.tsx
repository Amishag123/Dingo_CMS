import React from 'react'
import styles from "./index.module.css"
const Header = () => {
    return (
        <>
            <main className={styles.headerContainer}>
                <div className={styles.logo}>
                    <img src="/utils/icons/loginHeader.svg" alt="Logo" />
                </div>
                <div className={styles.searchcontainer}>
                    <div className={styles.searchBar}>
                        <img src="/utils/icons/Search.svg" alt='search' />
                        <span>Search...</span>
                    </div>
                    <div className={styles.profileView}>
                        <img src="/utils/icons/profileholderName.svg" alt="Logo" />
                        <img src="/utils/icons/user.svg" alt="Logo" />
                    </div>
                </div>
            </main>
            <div className={styles.border}></div>
        </>

    )
}

export default Header