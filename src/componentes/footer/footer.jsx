import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../imagens/Suddath.jpg";
import "./footer.css";
import {EmailIcon, Instaicone, Linkedinicone} from "./icon/iconSocial";




function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <div>
              <img className="imagemlogo" src={Logo} alt="..."/>
            </div>
          </Col>
          <Col lg={4}>
               <a href="mailto: patrikybrito@gmail.com" className="marginl">  <EmailIcon/>
             </a>
              <a href="https://www.linkedin.com/in/patriky-brito/" className="marginl"> <Linkedinicone/> </a>
              <a href="https://www.instagram.com/patrikybrito/" className="marginl"> <Instaicone/> </a>
          </Col>
        </Row>
        <Row>
          <Col> <p>© all rights reserved, 2022.</p></Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
