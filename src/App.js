import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./styles.module.css";
import Data from "./data.json";

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          className={styles.cardOne_container}
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <img className={styles.cardOne} src={project.src} alt={project.alt} />
          <span className={styles.tooltiptext}> {project.alt}</span>
        </div>
        <div
          className={styles.cardTwo}
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          {project.description}
        </div>
      </ReactCardFlip>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <header role="banner" className={styles.banner}>
        <h1 className={styles.banner_title}>Flashcards Interaction</h1>
      </header>
      <main role="main" className={styles.container}>
        <div className={styles.card_section}>
          <div className={styles.cardList}>
            {Data.map((item, index) => (
              <Card project={item} key={`card-${index}`} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
