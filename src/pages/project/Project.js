import './project.css';

import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import React from 'react';

export const Project = () => (
  <Container className='project-chat-container full-height-div'>
    <Row className='project-chat-row full-height-div'>
      <Col className='full-height-div'>
        <div className='project-chat-body'>
          <div className='project-chat-label'>
            Projeto
          </div>

          <div className='project-messages-container'>
            <div className='user-message-container'>
              <p className='project-message'>
                Olá poderia me ajudar a solucionar o chamado
              </p>
            </div>

            <div className='ai-message-container'>
              <p className='project-message ai-message'>Claro. Analisando dados...</p>
            </div>
            
            <div className='ai-message-container'>
              <p className='project-message'>
                Primeiramente para solucionar o chamado x é preciso confirmar se ele foi marcado também como y, caso isso for verdadeiro você deve encaminhar
                o chamado para um analista de shinforinfola, informando-o para seguir o arquivo z da base de dados.
              </p>
            </div>

            <div className='user-message-container'>
              <p className='project-message user-message'>Eu recebi um chamado Y que foi marcado como X</p>
            </div>

            <div className='ai-message-container'>
              <p className='project-message'>Este tipo de chamado é simples e pode ser solucionado ao seguir os passos da base de dados no arquivo Z.</p>
            </div>
          </div>

          <InputGroup className='project-chat-input'>
            <Form.Control />
            <InputGroup.Text> {'>'} </InputGroup.Text>
          </InputGroup>
        </div>
      </Col>
    </Row>
  </Container>
);
