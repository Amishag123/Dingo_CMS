import React from 'react';
import styles from "./index.module.css"

const SignupAccount = () => {
    return (
        <main className={styles.container}>
            {/* <div className={styles.border}></div> */}
            <div className={styles.signupAccountContainer}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <img src="/utils/icons/alkyeLogo.svg" alt="Logo" />
                    </div>
                    <div className={styles.singupContent}>
                        <h1>Sign in</h1>
                        <span>to continue to alkye cms</span>
                    </div>
                </div>
                <div className={styles.inputFields}>
                    <input placeholder='Username' />
                    <input placeholder='Password' />
                    <p>These details are provided to you by alkye team. If you have forgotten them please contact developer@alkye.com</p>
                    <button className={styles.loginButton}>
                        <img src="/utils/icons/login.svg" alt="Logo" />
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default SignupAccount;
