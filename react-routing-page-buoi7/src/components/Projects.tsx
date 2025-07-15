import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

function Projects() {
    const projects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A personal portfolio built with React and React Router. It showcases different projects and skills."
    },
    {
      id: "2",
      title: "E-Commerce App",
      description: "An e-commerce web app with shopping cart, product filters, and dynamic routing using React."
    },
    {
      id: "3",
      title: "Blog Platform",
      description: "A basic blog platform with post CRUD features and responsive layout using React and CSS Modules."
    }
  ];
  
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Projects</h1>
      <div className={styles.grid}>
        {projects.map(project => (
          <div key={project.id} className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
