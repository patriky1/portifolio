import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import Logo from '../imagens/Suddath.jpg'
import "./navbar.css"
import {Row, Col, Container} from 'react-bootstrap';

function Menu() {
  return (
      <>
      <Container>
  <Row>
    <Col>
    <Navbar bg="light" expand="lg" lg={6}>
  <Container className='containeresquerda'>
    <Navbar.Brand href="#home">Portifolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Contato</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </Col>
    <Col>
    <div className='logocontainer' lg={6}>
            <img className='Logoimage' src= {Logo} alt="logo" />
        </div>
    </Col>
  </Row>

    
        
        </Container>
        </>
  )
}

export default Menu


