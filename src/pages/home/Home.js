import './home.css'

import { Button, Col, Container, Image, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import React from 'react';

export const Home = () => {
  return (
    <Container fluid className='home-container'>
      <Row className='home-header-row'>
        <Col xs={6}>
          <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '6em', margin: '0.5em 1.5em 0em 1.5em' }}>
            TechHive
          </h1>

          <div style={{ color: 'white', fontSize: '1.5em', margin: '-0.6em 0em 0em 6.4em' }}>Corporation ©</div>

          <p style={{ color: '#D9D9D9', marginTop: 0, marginBottom: '3em', fontSize: '1.2em', margin: '4em 0em 1em 8em'}}>Um nova maneira de revolucionar o seu negócio.</p>

          <Link to='/group'>
            <Button variant='warning' className='home-header-row-button'>
              Saiba mais
            </Button>
          </Link>
        </Col>
        <Col xs={6}>
          <Image style={{ borderRadius: '35px', width: '90%', height: 'auto' }} src={require('../../assets/Inteligência artificial e tecnologia moderno colorido apresentação (2).jpg')} />
        </Col>
      </Row>

      <Row className='home-body-SAM-info'
        style={{
          backgroundColor: 'white',
          paddingTop: '5em',
          paddingBottom: '15em',
          marginLeft: '-2.75em',
          marginRight: '-2.75em',
          paddingLeft: '2em',
          paddingRight: '2em',
          marginBottom: '-2em',
          borderRadius: '20px 20px 0px 0px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Col xs={4}>
          <h1 style={{ color: 'black', fontWeight: 'bold', fontSize: '5em', margin: '2.5em 0em 0em 2.5em' }}>
            Um Novo Olhar Sobre o Futuro
          </h1>
        </Col>
        <Col xs={{span: 8, order: 1}}>
          <div style={{ color: 'black', fontSize: '1.5em', margin: '9em', textAlign: 'center', paddingLeft: '2em' }}>
              <p>
                A inteligência artificial (IA) tem se tornado uma peça fundamental na sociedade moderna, transformando a maneira como trabalhamos e nos comunicamos. 
                Uma das áreas onde a IA está fazendo uma diferença significativa é no suporte técnico, onde a eficiência e a rapidez são cruciais.
              </p> <br></br>
              <p>
                Pensando nisso, desenvolvemos o <strong>SAM</strong>, um chatbot de suporte N2 projetado para ajudar atendentes a oferecerem um serviço ainda melhor. 
                O SAM utiliza aprendizado de máquina para analisar interações passadas e fornecer respostas rápidas e precisas, melhorando a qualidade do atendimento e a satisfação do cliente.
              </p>
          </div>
        </Col>
      </Row>

      <Row
        style={{
          backgroundColor: 'black',
          paddingTop: '5em',
          paddingBottom: '5em',
          marginLeft: '-2.75em',
          marginRight: '-2.75em',
          paddingLeft: '2em',
          paddingRight: '2em',
          marginBottom: '-2em',
          borderRadius: '20px 20px 0px 0px'
        }}
      >
        <Col>
          <h1 style={{ marginBottom: '2.3em', fontSize: '3em', color: 'white', textAlign: 'center', letterSpacing: '.2em', fontFamily: 'Inter, sans-serif' }}>Conheça mais a respeito</h1>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', height: '50px', width: '100%', top: '-25px' }}>
              <span className='home-video-pitch-label'>Vídeo Pitch I</span>
            </div>
              
            <iframe
              width="75%"
              height="750"
              src="https://www.youtube.com/embed/ea08mJUU9Y4?si=SRrDZ3XitsQd-9Bt"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>

          <div style={{ position: 'relative', marginTop: '5em', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', height: '50px', width: '100%', top: '-25px' }}>
            <span className='home-video-pitch-label'>Vídeo Pitch II</span>
            </div>
              
            <iframe
              width="75%"
              height="750"
              src="https://www.youtube.com/embed/7jtSf8Z3EQI?si=xzDzosejkge3YcKi" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
};
