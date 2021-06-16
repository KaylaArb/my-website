import React from "react";
import Link from 'next/link'
import styles from '../styles/Contact.module.css'

export default function Contact() {

  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <h2 className={styles.contact__title}>Get In Touch</h2>
        <p className={styles.contact__para}>Feel free to get in touch with me via email for any questions or just to say hi!</p>
        <Link href='mailto:contact@kaylaarbez.ca'><button className={styles.contact__button} target="_blank">Say Hi!</button></Link>
      </div>

    </div>

  )
}



