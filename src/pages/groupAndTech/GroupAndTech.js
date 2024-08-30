import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';

export const GroupAndTech = () => {
  return (
    <Container fluid style={{ padding: '5em 2em', backgroundColor: '#ffffff' }}>
      <section>
        {/* Seção "The Future is Now" */}
      <Row style={{ paddingBottom: '5em' }} >
        <div>
          <Col xs={12}>
            <h1 style={{ color: 'black', fontWeight: 'bold', fontSize: '4em', marginBottom: 0, textAlign: 'center' }}>
              The Future is Now
            </h1>
          </Col>
        </div>
      </Row>
      </section>

      <section>
      {/* Seção "Conheça nosso time" */}
      <div style={{ backgroundColor: '#D9D9D9', padding: '2em', borderRadius: '15px', marginBottom: '3em' }}>
        <Row style={{ paddingBottom: '3em', textAlign: 'center' }}>
          <Col xs={12}>
            <h2 style={{ color: '#D9A520', fontWeight: 'bold', fontSize: '2.5em' }}>
              Conheça nosso time
            </h2>
          </Col>
          <Col xs={12}>
            <Carousel>
              <Carousel.Item>
                <Row>
                  <Col xs={4}>
                    <Card>
                      <Card.Img variant="top" src="path_to_image_1" />
                      <Card.Body>
                        <Card.Title>Nome 1</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <Card.Img variant="top" src="path_to_image_2" />
                      <Card.Body>
                        <Card.Title>Nome 2</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <Card.Img variant="top" src="path_to_image_3" />
                      <Card.Body>
                        <Card.Title>Nome 3</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={4}>
                    <Card>
                      <Card.Img variant="top" src="path_to_image_4" />
                      <Card.Body>
                        <Card.Title>Nome 4</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <Card.Img variant="top" src="path_to_image_5" />
                      <Card.Body>
                        <Card.Title>Nome 5</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <Card.Img variant="top" src="path_to_image_1" />
                      <Card.Body>
                        <Card.Title>Nome 1</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>

      {/* Seção "Nossa História" */}
      <div style={{ backgroundColor: '#D9D9D9', padding: '2em', borderRadius: '15px', marginBottom: '3em' }}>
        <Row style={{ paddingBottom: '3em', textAlign: 'center' }}>
          <Col xs={12}>
            <h2 style={{ color: '#D9A520', fontWeight: 'bold', fontSize: '2.5em' }}>
              Nossa História
            </h2>
          </Col>
          <Col xs={12}>
            <div style={{ backgroundColor: '#F0F0F0', padding: '2em', borderRadius: '15px' }}>
              {/* Conteúdo da história aqui */}
            </div>
          </Col>
        </Row>
      </div>

      {/* Seção "Tecnologias Utilizadas" */}
      <div style={{ backgroundColor: '#D9D9D9', padding: '2em', borderRadius: '15px', marginBottom: '3em' }}>
        <Row style={{ textAlign: 'center' }}>
          <Col xs={12}>
            <h2 style={{ color: '#D9A520', fontWeight: 'bold', fontSize: '2.5em' }}>
              Tecnologias Utilizadas
            </h2>
          </Col>
          <Col xs={12}>
            <div style={{ backgroundColor: '#F0F0F0', padding: '2em', borderRadius: '15px' }}>
              {/* Lista de tecnologias utilizadas */}
            </div>
          </Col>
        </Row>
      </div>
      </section>
    </Container>
  );
};
