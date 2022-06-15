import React, { useState } from 'react';
import './styles.css'

import { Button } from 'react-bootstrap';

import logo from '../../assets/logo.png';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <img src={logo} alt="" className="login-logo" />

      <form>
        <h5>Faça seu login</h5>
        <input type="text" placeholder="Usuário" value={user} onChange={(e) => setUser(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <a href="/forgot-password">Esqueci minha senha</a>
        <a href="/"><Button variant="success">Entrar</Button></a>
      </form>

    </div >
  );
}