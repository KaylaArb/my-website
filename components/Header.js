import React from "react";
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useState, useEffect } from 'react';

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = e => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  })

  return (
    <header className={`${styles.header} ${isScrolled ? styles.active : ''}`}>
      <div className={styles.header__title}>
        <p className={styles.title}>Welcome!</p>
      </div>
      <div className={styles.header__navLinks}>
        <a href='https://github.com/KaylaArb' target="_blank"><img src="/iconmonstr-github-1.svg" alt="gitHub" className={styles.icon} /></a>
        <a href='https://www.linkedin.com/in/kayla-arbez-3077a6118/' target="_blank"><img src="/iconmonstr-linkedin-3.svg" alt="linkedIn" className={styles.icon} /></a>
        <Link href='mailto:kaarbez@gmail.com'>
          <a className={styles.text}>
            kaarbez@gmail.com
                </a>
        </Link>
      </div>
    </header>
  )
}



