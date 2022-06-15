import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../../services/api'

import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/startup-connection/v1/project')
      setProjectsList(response.data);
      console.log(response.data);
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <div className="projects-content">
        <div>
          {projectsList.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}