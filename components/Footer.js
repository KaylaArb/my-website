import React from "react";
import styles from '../styles/Footer.module.css'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="https://github.com/KaylaArb/my-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and Built by Kayla Arbez
      </a>

      </div>
      <div>
        <img src="/icons8-cat.png" className={styles.logo} />
      </div>

    </footer>

  )
}



