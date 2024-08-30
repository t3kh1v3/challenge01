import './layout.css';

import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import React from 'react';

export const Layout = ({ children }) => {
  const path = useLocation().pathname;

  return (
    <Container fluid className='layout-container' style={{ height: '100%' }}>
      <Row style={{ height: '75px', borderRadius: '0 0 20px 20px', backgroundColor: '#213067', zIndex: 2, position: 'relative' }}>
        <Col xs='4' style={{ color: 'white'}}>
          <Link to='/'>
            <Image className='home-button-icon' src={require('../assets/home-button-icon.png')} height={50} width={50} />
          </Link>
        </Col>
        <Col xs='8' style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <Link to='/group'>
            <Button active={path === '/group'} variant='outline-secondary' style={{ marginLeft: '.5em', marginRight: '.5em', color: 'white' }}>
              Sobre o Projeto
            </Button>
          </Link>

          <Link to='/contact'>
            <Button active={path === '/contact'}  variant='outline-secondary' style={{ marginLeft: '.5em', marginRight: '.5em', color: 'white' }}>
              Contato
            </Button>
          </Link>

          <Link to='/list'>
            <Button active={path === '/list'} variant='outline-secondary' style={{ marginLeft: '.5em', marginRight: '.5em', color: 'white' }}>
              Chamados
            </Button>
          </Link>

          <Link to='/project'>
            <Button active={path === '/project'} variant='outline-warning' style={{ marginLeft: '.5em', marginRight: '.5em', padding: '.75em 2em', color: 'white' }}>
              Projeto
            </Button>
          </Link>
        </Col>
      </Row>

      <Row style={{ minHeight: 'calc(100% - 150px)' }}>
        <Col style={{ marginTop: '-2em', marginBottom: '-2em', backgroundColor: '#4259AC', paddingTop: '2em', paddingBottom: '2em' }}>
          {children}
        </Col>
      </Row>

      <Row style={{ height: '75px', backgroundColor: 'white', borderRadius: '20px 20px 0 0', zIndex: 2, position: 'relative' }}>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={require('../assets/github.jpeg')} alt='github icon' style={{ height: '30px', width: '30px', margin: '0 .5em' }} />
          <Image src={require('../assets/instagram.jpeg')} alt='instagram icon' style={{ height: '30px', width: '30px', margin: '0 .5em' }} />
          <Image src={require('../assets/linkedin.jpeg')} alt='linkedin icon' style={{ height: '30px', width: '30px', margin: '0 .5em' }} />
        </Col>
      </Row>
    </Container>
  )
};
