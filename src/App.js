import React from 'react';
import './App.css';
import Login from './components/Login';
import ListApp from './list-app';
import * as routes from './routes/routes';
import withAuth from './auth/withAuth';
import {Helmet} from "react-helmet";
import svg from './components/pklogo.svg'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';  

function App() {

  return (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>PK Loan List</title>
      <link rel="shortcut icon" type="image/png" href={svg} sizes="16x16" />
    </Helmet>
    <Router>
      <Switch>
        <Route path={routes.LOGIN} component={Login} />
        <Route path={routes.APP} component={ListApp} />
      </Switch>
    </Router>
  </>
  );
};

export default withAuth(App);
