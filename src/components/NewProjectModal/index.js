import React, { useState } from 'react';
import './styles.css';

import { Button, Modal } from 'react-bootstrap';

import api from '../../services/api'

export default function NewProjectModal({ onHide, show }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState();

  async function addProject() {
    const response = await api.post('startup-connection/v1/project/add', { name: name, description: description, status: 1 })
    console.log(response.data)
    
    onHide();
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title >
          Cadastrar Projeto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div className="register-modal">
          <input type="text" placeholder='Nome completo' onChange={e => setName(e.target.value)} />
          <textarea type="text" placeholder='Descrição' onChange={e => setDescription(e.target.value)} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => addProject()}>Cadastrar</Button>
        <Button variant="danger" onClick={() => onHide()}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )
}