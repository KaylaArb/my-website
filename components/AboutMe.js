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
                        <p>Residing in Vancouver BC, I am currently completing my bachelor’s in business administration while self-teaching my-self web and back end development. My background in business and fashion design has tremendously helped in rounding out my skills professionally and in web development.</p>
                        <p>In my spare time I enjoy casual weight lifting , watching anime, playing the odd video game (just finished Divinity Sin 2) and traveling (pre-COVID-19 of course).</p>
                        <p>Interesting fact about myself, my last name spelled backwards is ZEBRA.</p>
                    </div>
                    <div className={styles.tech}>
                        <h3 className={styles.tech__title}>Recent Technologies I’ve Been Working With</h3>
                        <div className={styles.tech__list}>
                            <div>
                                <ul>
                                    <li>JAVA</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JAVA SCRIPT</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>NEXT.JS</li>
                                    <li>WordPress</li>
                                    <li>Strapi (Headless CMS)</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}



