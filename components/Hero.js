import React from "react";
import Link from "next/link";
import styles from "../styles/Hero.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setloaded] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.hero__photoContainer}>
        <div className={styles.cf}>
          <Image
            src="/KaylaArbezPhoto.png"
            priority
            className={styles.img}
            layout="fill"
            onLoad={() => setloaded(true)}
          />
        </div>
      </div>
      <div className={styles.hero__description}>
        <p className={styles.intro}>Hi, my name is </p>
        <h1 className={styles.name}>Kayla Arbez</h1>
        <p>
          I am a full stack developer and project manager with expertise in
          various programming languages, frameworks, and project management
          methodologies.
        </p>

        <a href="mailto:kaarbez@gmail.com" target="_blank" rel="noreferrer">
          <button className={styles.button}>Get In Touch</button>
        </a>
      </div>
      <div className={styles.hero__shape}>
        <div className={styles.box}></div>
      </div>
    </div>
  );
}
