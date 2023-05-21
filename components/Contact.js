import React from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <h2 className={styles.contact__title}>Get In Touch</h2>
        <p className={styles.contact__para}>
          Feel free to get in touch with me via email for any questions or just
          to say hi!
        </p>
        <a
          className={styles.contact__button}
          href="mailto:kaarbez@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Say hi!
        </a>
      </div>
    </div>
  );
}
