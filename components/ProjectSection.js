import React from "react";
import styles from '../styles/ProjectSection.module.css';
import Title from './SectionTitle.js'
import GridBox from './GridBox.js'

export default function ProjectsSection() {

    return (
        <div className={styles.projects}>
            <div className={styles.projects__container}>
                <Title title="Projects" />

                <div className={styles.display}>
                    <div className={styles.project}>
                        <GridBox />
                    </div>
                    <div className={styles.project}>
                        <GridBox />
                    </div>
                    <div className={styles.project}>
                        <GridBox />
                    </div>
                    <div className={styles.project}>
                        <GridBox />
                    </div>
           
                </div>

            </div>

        </div>
    )
}



