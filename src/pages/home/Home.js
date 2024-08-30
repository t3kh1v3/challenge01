import './home.css'

import { Button, Col, Container, Image, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import React from 'react';

export const Home = () => {
  return (
    <Container fluid className='home-container'>
      <Row className='home-header-row'>
        <Col xs={6}>
          <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '4em', marginBottom: 0 }}>
            TechHive
          </h1>

          <div style={{ color: '#D9A520', fontSize: '1.5em' }}>Corporation</div>

          <p style={{ marginTop: 0, marginBottom: '3em', fontSize: '1.5em' }}>Um nova maneira de revolucionar o seu negócio.</p>

          <Link to='/project'>
            <Button variant='warning' style={{ padding: '.5em 2em', borderRadius: '25px', color: 'white', fontSize: '1.5em' }}>
              Saiba mais
            </Button>
          </Link>
        </Col>
        <Col xs={6}>
          <Image style={{ borderRadius: '35px' }} src={require('../../assets/home-image.jpeg')} />
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
        }}
      >
        <Col>
          <h1 style={{ marginBottom: '1em', color: 'white', textAlign: 'center', letterSpacing: '.2em' }}>Conheça mais a respeito</h1>

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
              src="https://www.youtube.com/embed/ea08mJUU9Y4?si=SRrDZ3XitsQd-9Bt"
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
