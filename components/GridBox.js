import React from "react";
import styles from "../styles/GridBox.module.css";

export default function GridBox({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.gifContainer}>
        <video className={styles.video} autoPlay muted controls playsInline>
          <source src={data.video} type="video/mp4" />
          <source src={data.video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.informationContainer}>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.sourceCode}>
          <a
            href={data.sourceCode}
            target="_blank"
            className={styles.sourceFont}
          >
            {" "}
            Source Code{" "}
          </a>
          {data.website !== "null" ? (
            <a
              href={data.website}
              target="_blank"
              className={styles.sourceFont}
            >
              {" "}
              Website{" "}
            </a>
          ) : (
            <a href={data.figma} target="_blank" className={styles.sourceFont}>
              {" "}
              Figma{" "}
            </a>
          )}
        </div>
        <div>
          <p className={styles.font}>{data.description}</p>
        </div>
        <div className={styles.listTech}>
          {data.technology.map((tech) => (
            <p className={styles.tech} key={tech}>
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
