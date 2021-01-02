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
                        <p>Residing in Vancouver BC, I am currently completintg my Bachelors in Business Administration while self teaching my-self web and back end development. My background in business and fashion design have tremoundsoly helped in rounding out my skills profesinally and in web development.</p>
                        <p>In my spare time, I enjoy casually weight lifting , watchinig anime and trying to finish Divinity Sin 2 before Baldur’s Gate release.</p>
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



