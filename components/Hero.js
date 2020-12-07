import React from "react";
import Link from 'next/link'
import styles from '../styles/Hero.module.css';

export default function Hero() {

    return (
        <div className={styles.hero}>
            <div className={styles.hero__photoContainer}>
                <div className={styles.photo}></div>
            </div>
            <div className={styles.hero__description}>
                <p className={styles.intro}>Hi, my name is </p>
                <h1 className={styles.name}>Kayla Arbez</h1>
                <p>As an aspiring software developer, I love a challenge and learning all things new and techinical!
                I am mostly self-taught while also taking COMP courses as my electives. I am currently open to all new oppotunities. :)</p>
                <Link href='mailto:kaarbez@gmail.com'><button className={styles.button}>Get In Touch</button></Link>
            </div>
            <div className={styles.hero__shape}>
                <div className={styles.box}></div>
            </div>
        </div>
    )
}



