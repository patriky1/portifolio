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
          <Col lg={4} className="socialicones">
              <EmailIcon className="ml-4"></EmailIcon>
              <Linkedinicone className="ml-4"></Linkedinicone>
              <Instaicone className="ml-4"></Instaicone>
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
