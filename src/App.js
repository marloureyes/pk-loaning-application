import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Loan Application</h1>
      <p>Enter Information for loan application</p>
      <form className="loan-form">
        <label for="fullName">Full Name:</label>
        <input name="fullName" type="text" required></input>
        <label for="phone">Contact</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
        <label for="date">Date:</label>
        <input type="date" id="birthday" name="date"></input>
        <label for="amount">Amount:</label>
        <input type="number" id="birthday" name="amount"></input>
        <label for="interest">Deduc Interest</label>
        <select for="interest">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </form>
    </div>
  );
}

export default App;
