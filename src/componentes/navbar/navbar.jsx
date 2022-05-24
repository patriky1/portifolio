import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import Logo from "../imagens/Suddath.png";
import "./navbar.css";
import { Row, Col, Container } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Container fluid className="bgcolorintem">
        <Row className="colapse" lg={6}>
          {/* <Col>
            <Navbar fixed="top" className="corfundo">
              <img className="Logoimage" src={Logo} alt="logo" />
              <Container className="containeresquerda">
                <Navbar.Brand href="#home"className="flexcenter"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                  <Nav>
                    <Nav.Link href="#portifolio">Portifolio</Nav.Link>
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="mailto: patrikybrito@gmail.com">Contato</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col> */}


          <Col className="itens" lg={5} ><a className="item" href="#portfolio">Portifolio</a>
          <a className="item" href="#home">Home</a>
          <a className="item" href="#contato">Contato</a>
 
          </Col>
          <Col  lg={7} className="p-0 logocontainer mobileresize">
         <img className="logoimage" src={Logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Menu;
