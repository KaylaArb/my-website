import matter from 'gray-matter';
import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import path from 'path'

export default function Home({dataList}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Howdy!</title>
        <link rel="icon" href="/icons8-cat.png" />
      </Head>

      <main className={styles.main}>
        <ul>
          {dataList.map((post) => (
            <li>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
            </li>
          ))}
        </ul>

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
