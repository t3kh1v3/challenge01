import './layout.css';

import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import React from 'react';

const recarregar = () => {
  window.location.href = '/project';
};

export const Layout = ({ children }) => {
  const path = useLocation().pathname;

  return (
    <Container fluid className='layout-container' style={{ height: '100%' }}>
      <Row style={{ height: '125px', borderRadius: '0 0 20px 20px', backgroundColor: '#132349', zIndex: 2, position: 'relative', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }}>
        <Col xs='4' style={{ color: 'white'}}>
          <Link to='/'>
            <Image className='home-button-icon' src={require('../assets/icons8-home-button-48.png')} height={50} width={50} />
          </Link>
        </Col>
        <Col xs='8' style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <Link to='/group'>
            <Button active={path === '/group'} variant='outline-secondary' style={{ marginLeft: '.5em', marginRight: '.5em', padding: '.8em 3em', color: 'white', borderRadius: '15px', fontWeight: 'bold'}}>
              Quem Somos
            </Button>
          </Link>

          <Link to='/contact'>
            <Button active={path === '/contact'}  variant='outline-secondary' style={{ marginLeft: '.5em', marginRight: '.5em', padding: '.8em 3em', color: 'white', borderRadius: '15px', fontWeight: 'bold'}}>
              Contato
            </Button>
          </Link>

          <Link to='/list'>
            <Button active={path === '/list'} variant='outline-secondary' style={{ marginLeft: '.5em', marginRight: '.5em', padding: '.8em 3em', color: 'white', borderRadius: '15px', fontWeight: 'bold'}}>
              Chamados
            </Button>
          </Link>

          <Link to='/project' onClick={recarregar}>
            <Button active={path === '/project'} variant='outline-warning' className='navbar-button-project'>
              Projeto
            </Button>
          </Link>
        </Col>
      </Row>

      <Row style={{ minHeight: 'calc(100% - 150px)' }}>
        <Col className='backgroud-pag'>
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
