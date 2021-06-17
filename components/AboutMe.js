import React from "react";
import styles from '../styles/AboutMe.module.css';
import Title from '../components/SectionTitle.js'

export default function AboutMe() {

    return (
        <div className={styles.about}>
            <Title title='About Me'/>
            <div className={styles.about__container}>
                <div className={styles.bio}>
                    <div className={styles.decsription}>
                        <p>Residing in Kelowna BC, I am currently completing my bachelor’s in business administration while self-teaching web and back end development. My background in business and fashion design has tremendously helped in rounding out my skills professionally and in web development.</p>
                        <p>In my spare time I enjoy casual weight lifting, watching anime, playing the odd video game and traveling.</p>
                        <p>Interesting fact about myself, my last name spelled backwards is ZEBRA.</p>
                    </div>
                    <div className={styles.tech}>
                        <h3 className={styles.tech__title}>Recent Technologies I’ve Been Working With</h3>
                        <div className={styles.tech__list}>
                            <div>
                                <ul>
                                    <li >Java</li>
                                    <li >JS</li>
                                    <li >CSS</li>
                                    <li >HTML</li>
                                    <li >SQL</li>
                                    <li >Git</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li >Spring Boot</li>
                                    <li >Maven</li>
                                    <li >Rest API</li>
                                    <li >React / Next.JS</li>
                                    <li >Strapi</li>
                                    <li >WordPress</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



