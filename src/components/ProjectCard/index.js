import React from 'react';
import './styles.css';

import projectImg from '../../assets/project.png';
import { Button } from 'react-bootstrap';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={projectImg} alt="Project" />
      <div>
        <h5>{project.name}</h5>
        <p>{project.description}</p>
        <a href="#">Ver detalhes</a>

      </div>
    </div>
  )
}