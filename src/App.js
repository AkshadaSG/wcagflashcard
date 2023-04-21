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
          onKeyPress={() => setIsFlipped((prev) => !prev)}
          tabindex="0"
          role="img"
          aria-label="Flashcard Image"
        >
          <img className={styles.cardOne} src={project.src} alt={project.alt} title={project.description}/>
          <span className={styles.tooltiptext}> {project.alt}</span>
        </div>
        <h2
          className={styles.cardTwo}
          onClick={() => setIsFlipped((prev) => !prev)}
          onKeyPress={() => setIsFlipped((prev) => !prev)}
        >
          {project.description}
        </h2>
      </ReactCardFlip>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <header role="banner" className={styles.banner}>
        <h1 className={styles.banner_title} tabindex="0">
          Flashcards Interaction
        </h1>
      </header>
      <main role="main" className={styles.container}>
        <div
          role="navigation"
          aria-label="Flash Cards"
          className={styles.card_section}
        >
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
