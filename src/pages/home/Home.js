import { Button, Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import React from 'react';

export const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={6}>
          <h1>
            TechHiver
          </h1>

          <div>Corporation</div>

          <p>Um nova maneira de revolucionar o seu negócio.</p>

          <Link to='/project'>
            <Button variant='warning'>
              Saiba mais
            </Button>
          </Link>
        </Col>
        <Col xs={6}>
        </Col>
      </Row>
    </Container>
  )
};
