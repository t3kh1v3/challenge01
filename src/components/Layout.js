import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';

export const Layout = ({ children }) => (
  <Container fluid>
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </Container>
);
