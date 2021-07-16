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
                        <p>Residing in Kelowna BC, I am currently completing my Bachelor’s in Business Administration while working as a Software Developer. My background in business and fashion design has tremendously helped in rounding out my skills professionally and in web development.</p>
                        <p>In my spare time I enjoy casual weight lifting, watching anime, playing the odd video game and traveling.</p>
                        <p>Interesting fact about myself, my last name spelled backwards is ZEBRA.</p>
                    </div>
                    <div className={styles.tech}>
                        <h3 className={styles.tech__title}>Recent Technologies I’ve Been Working With</h3>
                        <div className={styles.tech__list}>
                            <div>
                                <ul>
                                    <li key="1" >Java</li>
                                    <li key="2">JS</li>
                                    <li key="3">CSS</li>
                                    <li key="4">HTML</li>
                                    <li key="5">SQL</li>
                                    <li key="6">Git</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li key="7">Spring Boot</li>
                                    <li key="8">ASP.NET</li>
                                    <li key="9">Rest API</li>
                                    <li key="10">React / Next.JS</li>
                                    <li key="11">Strapi</li>
                                    <li key="12">WordPress</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



