import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Loan Application</h1>
      <p>Enter Information for loan application</p>
      <form className="loan-form">
        <div className="name">
          <label for="fullName">Full Name:</label>
          <input name="fullName" type="text" required></input>
        </div>

        <div className="contact"> 
          <label for="phone">Contact</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
        </div>

        <div className="date">
          <label for="date">Date:</label>
          <input type="date" id="birthday" name="date"></input>
        </div>

        <div className="amount">
          <label for="amount">Amount:</label>
          <input type="number" id="birthday" name="amount"></input>
        </div>

        <div className="interest">
          <label for="interest">Deduc Interest</label>
          <input type="radio" value="Yes" name="yes"></input>
          <label for="yes">Yes</label>
          <input type="radio" value="no" name="no"></input>
          <label for="no">No</label>
        </div>

        <div className="payment">
        <label for="month">Payment Duration</label>
          <div className="payDuration">
            <select name="month" id="month" form="monthform">
              <option value="1">1 Month</option>
              <option value="2">2 Months</option>
              <option value="3">3 Months</option>
              <option value="4">4 Months</option>
              <option value="5">5 Months</option>
              <option value="6">6 Months</option>
            </select>
            <label for="other">Other</label>
            <input type="text"></input>
          </div>
        </div>

        <div className="comments">
          <label for="thoughts">Other thoughts and comments</label>
          <textarea type="textarea"></textarea>
        </div>
      </form>
    </div>
  );
}

export default App;
