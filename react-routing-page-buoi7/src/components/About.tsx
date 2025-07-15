import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './About.module.css';

function About() {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutBox}>
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.bio}>
          Hi! I'm a frontend developer with a strong interest in building interactive web apps.
          I enjoy learning new technologies and frameworks to enhance user experiences.
          My passion lies in writing clean, maintainable code and solving real-world problems with React.
          When I'm not coding, I enjoy reading tech blogs and contributing to open source.
        </p>

        <button onClick={() => setShowSkills(!showSkills)} className={styles.toggleButton}>
          {showSkills ? 'Hide Skills' : 'Show Skills'}
        </button>

        {showSkills && (
          <ul className={styles.skillList}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        )}

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          View My Projects →
        </NavLink>
      </div>
    </div>
  );
}

export default About;
