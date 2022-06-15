import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap';

import api from '../../services/api'

import Header from '../../components/Header';
import NewEmpreneursModal from '../../components/NewEmpreneursModal';
import ProfileCard from '../../components/ProfileCard';

export default function Entrepreneurs() {
  const [newEmpreneursModalShow, setNewEmpreneursModalShow] = useState(false);
  const [entrepreneursList, setEntrepreneursList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/startup-connection/v1/entrepreneurs')
      setEntrepreneursList(response.data);
      console.log(response.data);
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      
      <div className="investors-content">
        <Button variant="success" onClick={() => setNewEmpreneursModalShow(true)}>Adicionar</Button>
        <div>
          {entrepreneursList.map(investor => (
            <ProfileCard key={investor.id} profile={investor} />
          ))}
        </div>
      </div>

      <NewEmpreneursModal show={newEmpreneursModalShow} onHide={() => setNewEmpreneursModalShow(false)} />
    </>
  );
}