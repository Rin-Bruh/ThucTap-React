import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Projects.module.css';

function ProjectDetail() {
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
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{project.title}</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{project.description}</p>
      <Link to="/projects" className={styles.button}>← Back to Projects</Link>
    </div>
  );
}

export default ProjectDetail;
