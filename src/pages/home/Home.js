import { Button, Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import React from 'react';

export const Home = () => {
  return (
    <Container fluid style={{ padding: '5em 2em'}}>
      <Row style={{ paddingBottom: '5em' }} >
        <Col xs={6}>
          <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '4em', marginBottom: 0 }}>
            TechHiver
          </h1>

          <div style={{ color: '#D9A520', fontSize: '1.5em' }}>Corporation</div>

          <p style={{ marginTop: 0, marginBottom: '3em', fontSize: '1.5em' }}>Um nova maneira de revolucionar o seu negócio.</p>

          <Link to='/project'>
            <Button variant='warning' style={{ padding: '.5em 2em', borderRadius: '25px', color: 'white', fontSize: '1.5em' }}>
              Saiba mais
            </Button>
          </Link>
        </Col>
        <Col xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white', fontSize: '5em', borderRadius: '35px' }}>
          <div style={{}}>
            EXAMPLE
          </div>
        </Col>
      </Row>

      <Row
        style={{
          backgroundColor: 'white',
          paddingTop: '5em',
          paddingBottom: '5em',
          marginLeft: '-2.75em',
          marginRight: '-2.75em',
          paddingLeft: '2em',
          paddingRight: '2em',
          marginBottom: '-2em',
        }}
      >
        <Col xs={6} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white', fontSize: '5em', borderRadius: '35px', width: '85%', height: '45%' }}>
            EXAMPLE
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white', fontSize: '5em', borderRadius: '35px', width: '85%', height: '45%' }}>
            EXAMPLE
          </div>
        </Col>

        <Col xs={6}>
          <h1 style={{ textAlign: 'center', color: '#D9A520', fontSize: '5em', marginBottom: '.75em' }}>Sobre nós</h1>

          <p>
            ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
          </p>
          <p>
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et 
          </p>

          <p>
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum 
          </p>
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
              <span style={{ backgroundColor: '#D9A520', display: 'block', borderRadius: '15px', height: '50px', width: '50%' }} />
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
              <span style={{ backgroundColor: '#D9A520', display: 'block', borderRadius: '15px', height: '50px', width: '50%' }} />
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
