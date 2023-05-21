import React from "react";
import styles from "../styles/AboutMe.module.css";
import Title from "../components/SectionTitle.js";

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <Title title="About Me" />
      <div className={styles.about__container}>
        <div className={styles.bio}>
          <div className={styles.decsription}>
            <p>
              As a full stack developer, my interest has recently shifted
              towards project management. I recognize the importance of not just
              delivering quality software solutions but also effectively
              managing the entire project life cycle. By combining my technical
              expertise with project management skills, I aim to drive
              successful outcomes, optimize resources, and ensure client
              satisfaction throughout the development process.
            </p>
            <p>
              In my spare time I enjoy table tennis, playing the odd video game
              and traveling. :)
            </p>
            <p>
              Interesting fact about myself, my last name spelled backwards is
              ZEBRA.
            </p>
          </div>
          <div className={styles.tech}>
            <h3 className={styles.tech__title}>
              Recent Technologies I’ve Been Working With
            </h3>
            <div className={styles.tech__list}>
              <div>
                <ul>
                  <li key="1">TS / JS</li>
                  <li key="2">HTML / CSS</li>
                  <li key="3">React / Next.JS</li>
                  <li key="4">Jira</li>
                  <li key="5">Confluence</li>
                  <li key="6">Figma</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li key="7">Java / C#</li>
                  <li key="8">Node.js</li>
                  <li key="9">Rest API</li>
                  <li key="10">React Native</li>
                  <li key="11">Firebase</li>
                  <li key="12">AWS 12</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
