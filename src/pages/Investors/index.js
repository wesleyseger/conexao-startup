import React, { useState, useEffect } from 'react';
import './styles.css';

import { Button } from 'react-bootstrap';

import Header from '../../components/Header';
import NewInvestorModal from '../../components/NewInvestorModal';
import ProfileCard from '../../components/ProfileCard';

import api from '../../services/api';

export default function Investors() {
  const [newInvestorModalShow, setNewInvestorModalShow] = useState(false);
  const [investorsList, setInvestorsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/startup-connection/v1/investor')
      setInvestorsList(response.data);
      console.log(response.data);
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <div className="investors-content">
        <Button variant="success" onClick={() => setNewInvestorModalShow(true)}>Adicionar</Button>
        <div>
          {investorsList.map(investor => (
            <ProfileCard key={investor.id} profile={investor} />
          ))}
        </div>
      </div>

      <NewInvestorModal show={newInvestorModalShow} onHide={() => setNewInvestorModalShow(false)} />
    </>
  );
}