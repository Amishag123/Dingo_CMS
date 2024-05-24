"use client"
import React, { useState } from 'react';
import styles from "./index.module.css"
import axios from 'axios';

const SignupAccount = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        const myHeaders = {
            'Content-Type': 'application/json'
        };

        const requestBody = {
            "username": username,
            "password": password
        };

        try {
            const response = await axios.post('https://dingoo-python-xe66lnoifa-uc.a.run.app/login/', requestBody, {
                headers: myHeaders
            });

            console.log(response.data);
        } catch (error:any) {
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError('An error occurred while processing your request.');
            }
        }
    };
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
                    <input placeholder='Username' value={username} onChange={handleUsernameChange} />
                    <input placeholder='Password' type="password" value={password} onChange={handlePasswordChange} />
                    <p>These details are provided to you by alkye team. If you have forgotten them please contact developer@alkye.com</p>
                    {error && <p className={styles.error}>{error}</p>}
                    <button className={styles.loginButton} onClick={handleLogin}>
                        <img src="/utils/icons/login.svg" alt="Logo" />
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default SignupAccount;
