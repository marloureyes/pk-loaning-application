import React from 'react';
import './App.css';
import Form from './componets/Form';
import List from './componets/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
        </nav>
    </div>
   <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
  </Router>
  );
};

export default App;
