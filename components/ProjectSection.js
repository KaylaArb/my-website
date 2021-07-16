import React from "react";
import styles from '../styles/ProjectSection.module.css';
import Title from './SectionTitle.js'
import GridBox from './GridBox.js'

export default function ProjectsSection({ data }) {

  return (
    <div className={styles.projects}>
      <Title title="Projects" />
      <div className={styles.projects__container}>
        <div className={styles.display}>
          {data.map((project) => (
            <div className={styles.project} key={project.id}>
              <GridBox key={project.id} data={project} />
            </div>
          ))}
        </div>

      </div>

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
      dataList
    },
  }
}


