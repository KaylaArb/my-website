import { useRef, useEffect, useState } from "react";
import styles from "../styles/SectionTitle.module.css";
import Image from "next/image";

export default function Title({ title }) {
  return (
    <div className={styles.about}>
      <div className={styles.about__header}>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <video className={styles.decorativeIcon} autoPlay muted>
            <source src="/decAnimation.mp4" type="video/mp4" />
            <Image src="/decorativeIcon.svg" layout="fill" />
          </video>
        </div>

        <hr className={styles.solid} />
      </div>
    </div>
  );
}
