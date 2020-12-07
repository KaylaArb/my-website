import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header.js'
import Hero from "../components/Hero.js"
import AboutMe from '../components/AboutMe.js'
import Projects from '../components/ProjectSection.js'
import Footer from '../components/Footer.js'
import Contact from '../components/Contact.js'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Howdy!</title>
        <link rel="icon" href="/icons8-cat.png" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}



