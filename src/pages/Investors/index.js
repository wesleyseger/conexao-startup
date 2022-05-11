import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import Header from '../../components/Header';
import NewInvestorModal from '../../components/NewInvestorModal';

export default function Investors() {
  const [newInvestorModalShow, setNewInvestorModalShow] = useState(true);

  return (
    <>
      <Header />
      <div>
        Investidores
        <Button variant="success" onClick={() => setNewInvestorModalShow(true)}>Adicionar</Button>
      </div>

      <NewInvestorModal show={newInvestorModalShow} onHide={() => setNewInvestorModalShow(false)} />
    </>
  );
}