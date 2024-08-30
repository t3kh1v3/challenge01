import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import React from 'react';

export const Layout = ({ children }) => {
  console.log('🚀 ~ children:', children);
  const path = useLocation().pathname;
  console.log('🚀 ~ path:', path);
  return (
    <Container fluid className='layout-container' style={{ height: '100%' }}>
      <Row style={{ height: '75px', borderRadius: '0 0 20px 20px', backgroundColor: '#213067', zIndex: 2, position: 'relative' }}>
        <Col xs='4' style={{ color: 'white'}}>
          <Link to='/'>
            <Button
              style={{
                height: '75px',
                width: '75px',
                left: '2em',
                top: '1em',
                backgroundColor: 'white',
                borderRadius: '5px',
                position: 'absolute',
                border: '1px solid black',
                color: 'black',
                verticalAlign: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              HOME
            </Button>
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
          <div>
            <img src={require('../assets/github.jpeg')} alt='github icon' style={{ height: '30px', width: '30px', margin: '0 .5em' }} />
          </div>

          <div>
            <img src={require('../assets/whatsapp.jpeg')} alt='whatsapp icon' style={{ height: '30px', width: '30px', margin: '0 .5em' }} />
          </div>

          <div>
            <img src={require('../assets/linkedin.jpeg')} alt='linkedin icon' style={{ height: '30px', width: '30px', margin: '0 .5em' }} />
          </div>
        </Col>
      </Row>
    </Container>
  )
};
