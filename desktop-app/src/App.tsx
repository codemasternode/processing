import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Dashboard from './pages/Dasboard'


export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </Router>
  );
}
