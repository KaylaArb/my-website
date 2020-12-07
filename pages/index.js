import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header.js'
import Hero from "../components/Hero.js"
import AboutMe from '../components/AboutMe.js'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Howdy!</title>
        <link rel="icon" href="/icons8-cat.png" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <Hero/>
        <AboutMe/>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}



