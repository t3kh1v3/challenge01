import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { GroupAndTech } from '../pages/groupAndTech/GroupAndTech';
import { Home } from '../pages/home/Home';
import { Layout } from '../components/Layout';
import {List} from "../pages/list/List";
import { Project } from '../pages/project/Project';
import React from 'react';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/'
        element={(
          <Layout>
            <Home />
          </Layout>
        )}
      />

      <Route path='group'
        element={(
          <Layout>
            <GroupAndTech />
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
            <List/>
          </Layout>
        )}
      />

      <Route path='project'
        element={(
          <Layout>
            <Project />
          </Layout>
        )}
      />
    </Routes>
  </Router>
);
