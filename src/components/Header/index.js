import React from 'react';
import './styles.css';

import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/investors">Investimentos</Nav.Link>
            <Nav.Link href="/entrepreneurs">Empreendimentos</Nav.Link>
            <Nav.Link href="/pricing">Consultar Empreendedores</Nav.Link>
          </Nav>
          <Nav>
            <div className="profile">
              <img src={avatar} alt="" />
              <span>
                <b>Wesley Seger</b>
                <small>Mentor</small>
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}