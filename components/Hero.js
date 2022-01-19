import React from "react";
import Link from 'next/link'
import styles from '../styles/Hero.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        window.addEventListener('load', setloaded(true));
    })

    return (
        <div className={styles.hero}>
            <div className={styles.hero__photoContainer}>
                <div className={styles.cf} >
                    <Image src="/KaylaArbezPhoto.jpg" className={styles.img} layout='fill'/>
                </div>
            </div>
            <div className={styles.hero__description}>
                <p className={styles.intro}>Hi, my name is </p>
                <h1 className={styles.name}>Kayla Arbez</h1>
                <p>I am a firm believer in applying a strong work ethic and a healthy curiosity to my academic, professional and personal levels of life. I always encourage new experiences and challenges, as every day is an opportunity to learn and grow as an individual.</p>
                <Link href='mailto:contact@kaylaarbez.ca'><button className={styles.button}>Get In Touch</button></Link>
            </div>
            <div className={styles.hero__shape}>
                <div className={styles.box}></div>
            </div>

        </div>
    )
}



