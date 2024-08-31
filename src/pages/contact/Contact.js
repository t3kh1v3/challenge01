import './contact.css';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import React from 'react';

export const Contact = () => {
  return (
    <Container className='contact-container full-height-div'>
      <Row className='contact-row full-height-div'>
        <Col className='full-height-div'>
          <div className='contact-body'>
            <div className='contact-label'>
              Agende seu contato
            </div>

            <div className='contact-title'>
              <p>Cadastrar</p>
            </div>

            <div className='contact-form'>
              <Form className='contact-form-body'>
                <Form.Group className='contact-form-group'>
                  <Form.Label className='contact-form-label'>Nome</Form.Label>
                  <Form.Control className='contact-form-input' type='text' placeholder='Username'/>
                </Form.Group>
                <Form.Group className='contact-form-group'>
                  <Form.Label className='contact-form-label'>Email</Form.Label>
                  <Form.Control className='contact-form-input' type='email' placeholder='Email' />
                </Form.Group>
                <Form.Group className='contact-form-group'>
                  <Form.Label className='contact-form-label'>Telefone</Form.Label>
                  <Form.Control className='contact-form-input' type='text' placeholder='Telefone' />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                  <Form.Check
                    className='contact-form-checkbox'
                    label='Aceito os Termos de Uso e confirmo que li a política de privacidade'
                    custom
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <Button className='contact-form-submit' type='submit'>Cadastrar</Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
};