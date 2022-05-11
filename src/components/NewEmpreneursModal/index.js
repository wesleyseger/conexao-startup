import React from 'react';
import './styles.css';

import { Modal } from 'react-bootstrap';

export default function NewEmpreneursModal({ onHide, show }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title >
          Novo Cadastro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        Novo cadastro de empreendedor
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}