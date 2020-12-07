import React from "react";
import styles from '../styles/GridBox.module.css';
import Link from 'next/link'


export default function GridBox() {

    return (
        <div className={styles.container}>
            <div className={styles.gifContainer}>
                <p>gid video here</p>

            </div>
            <div className={styles.informationContainer}>
                <div className={styles.sourceCode}>
                    <Link href='https://github.com/LRode/halfmoon-frontend/blob/master/styles/BlogBlock.module.css'><a className={styles.sourceFont}> Source Code </a></Link>
                    <Link href='https://github.com/LRode/halfmoon-frontend/blob/master/styles/BlogBlock.module.css'><a className={styles.sourceFont}> Website </a></Link>
                </div>
                <div>
                    <p>Facebook Messenger chat bot extension featuring authentication and full song streaming from within the Messenger app. Read more about it on The Verge. This is ane xample of text to see how large it can be</p>
                </div>
                <div className={styles.listTech}>
                    <ul>
                        <li>Home</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>About</li>
                        <li>About</li>
                    </ul>

                </div>

            </div>

        </div>
    )
}



