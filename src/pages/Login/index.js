import React, { useState } from 'react';
import './styles.css'

import { Button } from 'react-bootstrap';

import logo from '../../assets/logo.png';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    //login
  }

  return (
    <div className="login-container">
      <img src={logo} alt="" className="login-logo" />

      <form action={(e) => handleLogin(e)}>
        <h5>Faça seu login</h5>
        <input type="text" placeholder="Usuário" value={user} onChange={(e) => setUser(e.target.value)} />
        <input type="text" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <a href="/">Esqueci minha senha</a>
        <Button variant="success" type="submit">Entrar</Button>
      </form>

    </div >
  );
}