import React, { useState } from 'react';
import './styles.css';

import { Button, Modal } from 'react-bootstrap';
import api from '../../services/api';

export default function NewInvestorModal({ onHide, show }) {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  async function addInvestor() {
    const response = await api.post('startup-connection/v1/investor/add', { name: name, age: age, city: city, username: username, mail: email })
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
          Cadastrar Investidor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div className="register-modal">
          <input type="text" placeholder='Nome completo' onChange={e => setName(e.target.value)} />
          <input type="text" placeholder='Idade' onChange={e => setAge(e.target.value)} />
          <input type="text" placeholder='Cidade' onChange={e => setCity(e.target.value)} />
          <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
          <input type="text" placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => addInvestor()}>Cadastrar</Button>
        <Button variant="danger" onClick={() => onHide()}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )
}