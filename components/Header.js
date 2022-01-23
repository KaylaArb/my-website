import React from "react";
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.active : ''}`}>
      <div className={styles.header_contiainer}>
        <div className={styles.header__title}>
          <p className={styles.title} onClick={scrollToTop} >Welcome!</p>
        </div>
        <div className={styles.header__navLinks}>
          <a href='https://github.com/KaylaArb' target="_blank"><img loading="lazy" src="/iconmonstr-github-1.svg" alt="gitHub" className={styles.icon} /></a>
          <a href='https://www.linkedin.com/in/kayla-arbez-3077a6118/' target="_blank"><img loading="lazy" src="/iconmonstr-linkedin-3.svg" alt="linkedIn" className={styles.icon} /></a>
          <Link href='mailto:contact@kaylaarbez.ca'>
            <a className={styles.text} target="_blank">
              contact@kaylaarbez.ca
                  </a>
          </Link>
        </div>
      </div>
    </header>
  )
}



