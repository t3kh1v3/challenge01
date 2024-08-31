import './groupAndTech.css';

import { Card, Carousel, Col, Container, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

export const GroupAndTech = () => {
  return (
    <Container fluid style={{ padding: '5em 2em', backgroundColor: 'transparent' }}>
      <section>
      <Row style={{ paddingBottom: '13em', paddingTop: '10em' }} >
        <div>
          <Col xs={12}>
            <h1 style={{ color: 'White', fontWeight: 'bold', fontSize: '4em', marginBottom: 0, textAlign: 'center' }}>
              The Future is Now
            </h1>
          </Col>
        </div>
      </Row>
      </section>

      <section>

      <div style={{ backgroundColor: '#F1F1F1', padding: '5em 3em', borderRadius: '30px', margin: '3em 4em 3em 4em' }}>
          <Row style={{ paddingBottom: '3em', textAlign: 'center' }}>
            <Col xs={12}>
              <h2 style={{ color: 'Black', fontWeight: 'bold', fontSize: '3em' }}>
                Conheça Nosso Time
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
                        <Card.Title className='group-card-body-title'>David Moura</Card.Title>
                        <Card.Subtitle className='group-card-body-subtitle'>Desenvolvedor Fullstack</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/kaique.jpeg')} />
                      <Card.Body>
                        <Card.Title className='group-card-body-title'>Kaique Bonini</Card.Title>
                        <Card.Subtitle className='group-card-body-subtitle'>Desenvolvedor Fullstack</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/pedro.jpg')} />
                      <Card.Body>
                        <Card.Title className='group-card-body-title'>Pedro Alves</Card.Title>
                        <Card.Subtitle className='group-card-body-subtitle'>Desenvolvedor Fullstack</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className='justify-content-center'>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/lucas.jpg')} />
                      <Card.Body>
                        <Card.Title className='group-card-body-title'>Lucas Terra</Card.Title>
                        <Card.Subtitle className='group-card-body-subtitle'>VideoMaker & Design</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/luka.jpeg')} />
                      <Card.Body>
                        <Card.Title className='group-card-body-title'>Luka Lima</Card.Title>
                        <Card.Subtitle className='group-card-body-subtitle'>Desenvolvedor Front-End</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card className='group-card-body'>
                      <Card.Img variant="top" src={require('../../assets/SAM.jpg')} />
                      <Card.Body>
                        <Card.Title className='group-card-body-title'>SAM</Card.Title>
                        <Card.Subtitle className='group-card-body-subtitle'>Chatbot IA</Card.Subtitle>
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
      <div style={{ backgroundColor: '#F1F1F1', padding: '5em 3em', borderRadius: '30px', margin: '3em 4em 3em 4em' }}>
        <Row style={{ paddingBottom: '3em', textAlign: 'center' }}>
          <Col xs={12}>
            <h2 style={{ color: 'Black', fontWeight: 'bold', fontSize: '2.5em', margin: '0em 4em 2em 4em' }}>
              Sobre o projeto - A Revolução do Suporte Técnico com o SAM
            </h2>
          </Col>
          <Col xs={12}>
            <div className='paragraf' style={{ backgroundColor: '#ffffff', padding: '5em', borderRadius: '30px', margin: '0em 10em 0em 10em' }}>
              <p>
                A introdução do <strong>SAM</strong> representa um marco revolucionário no campo do suporte técnico, apresentando uma abordagem inovadora e altamente eficaz para a resolução de problemas.
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
            <Link to='/list'>
              <Button variant='warning' className='home-header-row-button'>
                Saiba Mais
              </Button>
            </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* Seção "Tecnologias Utilizadas" */}
      <div style={{ backgroundColor: '#F1F1F1', padding: '5em 3em', borderRadius: '30px', margin: '3em 4em 3em 4em' }}>
        <Row style={{ textAlign: 'center' }}>
          <Col xs={12}>
            <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '2.5em', marginBottom: '1.5em'}}>
              Tecnologias Utilizadas
            </h2>
          </Col>
          <Col xs={12}>
            <div style={{ backgroundColor: '#ffffff', padding: '4em', paddingTop: '5em', borderRadius: '30px', margin: '0em 10em 0em 10em' }}>
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
