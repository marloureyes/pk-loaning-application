import React from 'react';
import './App.css';
import Login from './components/Login';
import ListApp from './list-app';
import * as routes from './routes/routes';
import withAuth from './auth/withAuth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';  

function App() {

  return (
  <>
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
