import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Imggrid from "./imagem_grid/imgGrid.png";
import Imggrid1 from "./imagem_grid/dog.jpg";
import "./grid.css";

function Grid1() {
  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col>
          <h1>
            Patriky Lucena de Brito
          </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={6} >
            <img className="imagemgrid" src={Imggrid} alt="..." />
          </Col>
          <Col lg={6}>
            <p className="textobranco bgcolor">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={6} className="bgcolor">
          <h1 className="textobranco"> Titulo </h1>
          <p className="textored">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
            </p>
          </Col>
          <Col lg={6}>
            <img className="imagemgrid1" src={Imggrid1} alt="..." />
          </Col>
        </Row>

        <Row className="imagemBG">
          <Col  className="textstyle">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado.
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Grid1;
