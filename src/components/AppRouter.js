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

      <Route path='contact'
        element={(
          <Layout>
            <div>CONTATO</div>
          </Layout>
        )}
      />

      <Route path='list'
        element={(
          <Layout>
            <div>LIST</div>
          </Layout>
        )}
      />

      <Route path='project'
        element={(
          <Layout>
            <div>PROJECT</div>
          </Layout>
        )}
      />
    </Routes>
  </Router>
);
