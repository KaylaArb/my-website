import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header.js'
import Hero from "../components/Hero.js"
import AboutMe from '../components/AboutMe.js'
import ProjectsSection from '../components/ProjectSection.js'
import Footer from '../components/Footer.js'
import Contact from '../components/Contact.js'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export default function Home({ dataList }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Howdy!</title>
        <link rel="icon" href="/icons8-cat.png" />
        <meta name="og:title" content="Kayla Arbez | Web Developer" />
        <meta name="og:description" content="Programmer portfolio | Showcase of full stack projects" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://www.kaylaarbez.ca/" />
        <meta name="og:image" content="/imagetag.jpg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E75P9H55SB" >
        </script>
        <script dangerouslySetInnerHTML={
          {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments)}
              gtag("js", new Date());
              gtag("config", "G-E75P9H55SB", { "anonymize_ip" : true});`}
        }>
        </script>
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <AboutMe />
        <ProjectsSection data={dataList} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  // process.cwd gives us the directoy Next.js will be executed in. It will grab all the files in Content and store it into 'files'
  const dataDirectory = path.join(process.cwd(), 'content')
  //fs is a nodejs module to read and write files
  const filenames = fs.readdirSync(dataDirectory)

  const projects = filenames.map((filename) => {
    const filePath = path.join(dataDirectory, filename)
    const fileContents = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    return fileContents;
  });

  //parses to HTML
  const data = projects.map((project) => matter(project));
  const dataList = data.map((listItem) => listItem.data);

  return {
    props: {
      dataList,
    },
  }
}



