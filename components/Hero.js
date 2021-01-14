import React from "react";
import Link from 'next/link'
import styles from '../styles/Hero.module.css';

export default function Hero() {

    return (
        <div className={styles.hero}>
            <div className={styles.hero__photoContainer}>
                <div className={styles.cf}>
                    <img src="/img1.jxr" className={styles.img}/>
                    <img src="/img2.jxr"  className={styles.img}/>
                    <img src="/img3.jxr"  className={styles.img}/>
                    <img src="/img3.jxr"  className={styles.img}/>
                </div>
            </div>
            <div className={styles.hero__description}>
                <p className={styles.intro}>Hi, my name is </p>
                <h1 className={styles.name}>Kayla Arbez</h1>
                <p>As an aspiring software developer, I love a challenge and learning all things new and technical! I am mostly self-taught while taking COMP courses as electives in my Business Degree. :)</p>
                <Link href='mailto:kaarbez@gmail.com'><button className={styles.button}>Get In Touch</button></Link>
            </div>
            <div className={styles.hero__shape}>
                <div className={styles.box}></div>
            </div>
           
        </div>
    )
}



