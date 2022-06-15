import React, { useState } from 'react';
import './styles.css';

import { Button } from 'react-bootstrap';

import Header from '../../components/Header';
import NewProjectModal from '../../components/NewProjectModal';

import logo from '../../assets/logo.png';

export default function Home() {
  const [newProjectModalShow, setNewProjectModalShow] = useState(false);

  return (
    <>
      <Header />

      <div className="home-container">
        <img src={logo} alt="" />
        <b>Conectar sua Start Up com um investidor nunca foi tão fácil</b>
        <Button variant="success" onClick={() => setNewProjectModalShow(true)}>Adicionar Projeto</Button>
      </div>

      <NewProjectModal show={newProjectModalShow} onHide={() => setNewProjectModalShow(false)} />
    </>
  );
}