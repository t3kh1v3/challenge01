import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import React from 'react';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/'
        element={(
          <Layout>
            <div>HOME</div>
          </Layout>
        )}
      />

      <Route path='group'
        element={(
          <Layout>
            <div>GROUP & TECH</div>
          </Layout>
        )}
      />

      <Route path='list'
        element={(
          <Layout>
            <div>LISTA DE CHAMADOS</div>
          </Layout>
        )}
      />

      <Route path='ticket'
        element={(
          <Layout>
            <div>CHAMADO</div>
          </Layout>
        )}
      />

      <Route path='ticket-doc'
        element={(
          <Layout>
            <div>GOOGLE DOC DO CHAMADO</div>
          </Layout>
        )}
      />
    </Routes>
  </Router>
);
