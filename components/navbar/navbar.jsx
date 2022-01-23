import React from 'react'
import "./navbar.css"
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="./assets/logo.png"
        width="140"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
    )
}

export default Header
