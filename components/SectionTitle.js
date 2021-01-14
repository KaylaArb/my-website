import React from "react";
import styles from '../styles/SectionTitle.module.css';

export default function Title({ title }) {

    return (
        <div className={styles.about}>
            <div className={styles.about__header}>
                <div className={styles.container}>
                    <h2 className={styles.title}>{title}</h2>
                    <img src="/decorativeIcon.svg" className={styles.decorativeIcon} />
                </div>

                <hr className={styles.solid} />
            </div>
        </div>
    )
}



