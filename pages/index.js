import React, { useState, useEffect } from "react";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
const AboutMe = dynamic(() => import("../components/AboutMe"));
const ProjectsSection = dynamic(() => import("../components/ProjectSection"));
const Contact = dynamic(() => import("../components/Contact"));
import Footer from "../components/Footer.js";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function Home({ dataList }) {
  const imageTag = "/imageTag.webp";

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <div className={styles.container}>
      <Head prefix="og: http://ogp.me/ns#">
        <title>Kayla Arbez</title>
        <link rel="icon" href="/catSprite.gif" />
        <meta
          name="og:title"
          content="Kayla Arbez | Web Developer"
          key="title"
        />
        <meta name="og:image" content={imageTag} key="image" />
        <meta
          name="og:description"
          content="Programmer portfolio | Showcase of full stack projects"
          key="description"
        />
        <meta name="og:type" content="website" key="type" />
        <meta name="og:url" content="https://www.kaylaarbez.ca/" key="url" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div ref={observe}>
          <Hero />
          <AboutMe />
          {inView && <ProjectsSection data={dataList} />}
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // process.cwd gives us the directoy Next.js will be executed in. It will grab all the files in Content and store it into 'files'
  const dataDirectory = path.join(process.cwd(), "content");
  //fs is a nodejs module to read and write files
  const filenames = fs.readdirSync(dataDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(dataDirectory, filename);
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
  };
}
