import React from 'react';
import './styles.css';

import { Modal } from 'react-bootstrap';

export default function NewInvestorModal({ onHide, show }) {
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
        Novo cadastro de investidor
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}