import './groupAndTech.css';

import { Card, Carousel, Col, Container, Image, Row } from 'react-bootstrap';

import React from 'react';

export const GroupAndTech = () => {
  return (
    <Container fluid style={{ padding: '5em 2em', backgroundColor: 'transparent' }}>
      <section>
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

      <div style={{ backgroundColor: '#D9D9D9', padding: '2em', borderRadius: '15px', marginBottom: '3em' }}>
        <Row style={{ paddingBottom: '3em', textAlign: 'center' }}>
          <Col xs={12}>
            <h2 style={{ color: '#D9A520', fontWeight: 'bold', fontSize: '2.5em' }}>
              Conheça nosso time
            </h2>
          </Col>
          <Col xs={12}>
            <Carousel variant='dark'>
              <Carousel.Item>
                <Row className='justify-content-center'>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/david.jpg')} />
                      <Card.Body>
                        <Card.Title>David Moura</Card.Title>
                        <Card.Subtitle>Desenvolvimento Site</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/kaique.jpeg')} />
                      <Card.Body>
                        <Card.Title>Kaique Bonini</Card.Title>
                        <Card.Subtitle>Desenvolvimento Site</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className='justify-content-center'>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/pedro.jpeg')} />
                      <Card.Body>
                        <Card.Title>Pedro</Card.Title>
                        <Card.Subtitle>Desenvolvimento Site</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/lucas.jpeg')} />
                      <Card.Body>
                        <Card.Title>Lucas</Card.Title>
                        <Card.Subtitle>Vídeo Pitch</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className='justify-content-center'>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/luka.jpeg')} />
                      <Card.Body>
                        <Card.Title>Luka</Card.Title>
                        <Card.Subtitle>Desenvolvimento Site</Card.Subtitle>
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
              Sobre o projeto - A Revolução do Suporte Técnico com o SAM
            </h2>
          </Col>
          <Col xs={12}>
            <div style={{ backgroundColor: '#F0F0F0', padding: '2em', borderRadius: '15px' }}>
              <p>
                A introdução do SAM representa um marco revolucionário no campo do suporte técnico, apresentando uma abordagem inovadora e altamente eficaz para a resolução de problemas.
                Ao utilizar aprendizado de máquina para analisar interações anteriores e organizar uma extensa base de conhecimento, o SAM se estabelece como uma ferramenta indispensável,
                beneficiando tanto empresas quanto usuários individuais em busca de assistência técnica de excelência.
              </p>
              <p>
                Um dos diferenciais mais notáveis do SAM é sua capacidade de interação por voz, que facilita significativamente a colaboração entre os membros da equipe de suporte.
                Esta funcionalidade não apenas agiliza a comunicação, mas também possibilita a resolução de problemas em tempo real, resultando em um aumento substancial no desempenho e na eficiência da equipe como um todo.
              </p>
              <p>
                Olhando para o horizonte, a integração de tecnologias de inteligência artificial, como as empregadas no SAM, promete uma evolução contínua no setor de suporte técnico. Esta inovação oferece perspectivas de uma
                assistência cada vez mais inteligente, adaptativa e eficiente, preparada para atender às demandas crescentes e diversificadas de clientes e empresas em um cenário tecnológico em constante transformação.
              </p>

              <p>
                Em suma, o SAM não apenas aprimora a qualidade do suporte técnico atual, mas também pavimenta o caminho para um futuro onde a assistência técnica será mais rápida, precisa e personalizada,
                adaptando-se continuamente às necessidades de um mundo digital em rápida evolução.
              </p>
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
              <Row>
                <Col xs={3}>
                  <Image src={require('../../assets/react.png')} width={50} height={50} />
                  <p>Foi utilizado React para poder organizar um layour reutilizável.</p>
                </Col>

                <Col xs={3}>
                  <Image src={require('../../assets/react-bootstrap.png')} width={50} height={50} />
                  <p>React-bootstrap foi utilizado para tirar proveito de componentes html estilizados e agilizar o desenvolvimento.</p>
                </Col>

                <Col xs={3}>
                  <Image src={require('../../assets/react-router.png')} width={50} height={50} />
                  <p>React router possibilitou criar as diferentes rotas para cada página tirando proveito de um redirecionamento simplificado e rápido.</p>
                </Col>

                <Col xs={3}>
                  <Image src={require('../../assets/javascript.png')} width={50} height={50} />
                  <p>Javascript foi utilizado para montar a lógica do projeto.</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      </section>
    </Container>
  );
};
