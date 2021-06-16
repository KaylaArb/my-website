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
                    <img src="/img4.jpg" className={`${styles.img} ${loaded ? styles.active : ''}`} />
                    <img src="/img3.jpg" className={`${styles.img} ${loaded ? styles.active : ''}`} />
                    <img src="/img2.jpg" className={`${styles.img} ${loaded ? styles.active : ''}`} />
                    <img src="/img1.jpg" className={`${styles.img} ${loaded ? styles.active : ''}`} />
                </div>
            </div>
            <div className={styles.hero__description}>
                <p className={styles.intro}>Hi, my name is </p>
                <h1 className={styles.name}>Kayla Arbez</h1>
                <p>I love a challenge and learning all things new and technical! I am currently working as a Back End Software Developer for ESC Corporate Services.</p>
                <Link href='mailto:contact@kaylaarbez.ca'><button className={styles.button}>Get In Touch</button></Link>
            </div>
            <div className={styles.hero__shape}>
                <div className={styles.box}></div>
            </div>

        </div>
    )
}



