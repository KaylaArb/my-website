import React from "react";
import Link from 'next/link'
import styles from '../styles/Contact.module.css'

export default function Contact() {

  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <h2 className={styles.contact__title}>Get In Touch</h2>
        <p className={styles.contact__para}>I am currently searching for a full-time position as an intern/ junior software developer, specializing in either full-stack or Java. Please feel free to get in touch with me via email for any questions or just to say hi!</p>
        <Link href='mailto:kaarbez@gmail.com'><button className={styles.contact__button}>Say Hi!</button></Link>
      </div>

    </div>

  )
}



