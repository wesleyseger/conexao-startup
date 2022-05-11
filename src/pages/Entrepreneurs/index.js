import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import Header from '../../components/Header';
import NewEmpreneursModal from '../../components/NewEmpreneursModal';


export default function Entrepreneurs() {
  const [newEmpreneursModalShow, setNewEmpreneursModalShow] = useState(false);

  return (
    <>
      <Header />
      <div>
        Empreendedores
        <Button variant="success" onClick={() => setNewEmpreneursModalShow(true)}>Adicionar</Button>
      </div>

      <NewEmpreneursModal show={newEmpreneursModalShow} onHide={() => setNewEmpreneursModalShow(false)} />
    </>
  );
}