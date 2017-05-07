import React from 'react'
import { Col, Row, Image, Glyphicon } from 'react-bootstrap'
import './css/greeting.css'

const Greeting = () => (
  <Col className="container-fluid">
    <Row>
      <Col xs={12} id="photo-container" className="text-center">
        <Image id="photo-big" src="/img/alex.jpg" rounded responsive />
      </Col>
    </Row>
    <Row>
      <Col xs={12} className="text-center" id="greeting">
        
        <h1>Olá, seja bem vindo! Eu sou Alex Alonso.</h1>
        <h1>Eu desenvolvo websites.</h1>
      </Col>

      <Col xs={12} id="options">
        <Col xs={12} sm={4} className="option" id="curriculum-container">
          <a href="/#/curriculo">
            <div id="curriculum-border">
              <Glyphicon glyph="file" id="curriculum-glyph" />
              <h3>Ver Currículo</h3>
            </div>
          </a>
        </Col>

        <Col xs={12} sm={4} className="option" id="portfolio-container">
          <a href="/#/portfolio">
            <div id="portfolio-border">
              <Glyphicon glyph="book" id="book-glyph" />
              <h3>Ver Portfolio</h3>
            </div>
          </a>
        </Col>

        <Col xs={12} sm={4} className="option text-center">
          <a href="/#/contato">
            <Col id="contact-border">
              <Glyphicon glyph="send" id="contact-glyph" />
              <h3>Enviar Mensagem</h3>
            </Col>
          </a>
        </Col>
      </Col>
    </Row>
  </Col>
)

export default Greeting
