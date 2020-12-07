import React from "react";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.header__title}>
                <p className={styles.title}>Welcome!</p>
            </div>
            <div className={styles.header__navLinks}>
                <Link href='/https://github.com/KaylaArb'>
                <img src="/iconmonstr-github-1.svg" alt="gitHub" className={styles.icon}/>
                </Link>
                <Link href='/https://www.linkedin.com/in/kayla-arbez-3077a6118/'>
                <img src="/iconmonstr-linkedin-3.svg" alt="linkedIn" className={styles.icon}/>
                </Link>
                <Link href='/resume'>
                    <a className={styles.text}>
                        Resume
                </a>
                </Link>
                <Link href='mailto:kaarbez@gmail.com'>
                    <a className={styles.text}>
                        Contact
                </a>
                </Link>
            </div>
        </header>
    )
}



