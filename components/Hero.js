import React from "react";
import Link from 'next/link'
import styles from '../styles/Hero.module.css';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        window.addEventListener('load', setloaded(true));
    })

    return (
        <div className={styles.hero}>
            <div className={styles.hero__photoContainer}>
                <div className={styles.cf} >
                    <img src="/img4.webp" className={`${styles.img} ${loaded ? styles.active : ''}`} />
                    <img src="/img3.webp" className={`${styles.img} ${loaded ? styles.active : ''}`} />
                    <img src="/img2.webp" className={`${styles.img} ${loaded ? styles.active : ''}`} />
                    <img src="/img1.webp" className={`${styles.img} ${loaded ? styles.active : ''}`} />
                </div>
            </div>
            <div className={styles.hero__description}>
                <p className={styles.intro}>Hi, my name is </p>
                <h1 className={styles.name}>Kayla Arbez</h1>
                <p>As an aspiring software developer, I love a challenge and learning all things new and technical! I am mostly self-taught while taking COMP courses as electives in my Business Degree. :)</p>
                <Link href='mailto:contact@kaylaarbez.ca'><button className={styles.button}>Get In Touch</button></Link>
            </div>
            <div className={styles.hero__shape}>
                <div className={styles.box}></div>
            </div>

        </div>
    )
}



