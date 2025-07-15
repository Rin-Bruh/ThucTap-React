import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.hero}>
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className={styles.profileImage}
        />
        <h1 className={styles.heading}>Welcome to My Portfolio</h1>
        <p>
          I'm a passionate frontend developer exploring React and modern UI tools.
          This portfolio showcases my work, learning journey, and projects.
        </p>

        <Link to="/about" className={styles.ctaButton} onClick={() => setClicks(prev => prev + 1)}>
          Learn more about me
        </Link>

        <p className={styles.counterText}>Button clicked {clicks} time{clicks !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
}

export default Home;
