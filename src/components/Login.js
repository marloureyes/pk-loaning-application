import React, { useState, useEffect } from 'react';
import * as routes from '../routes/routes';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase'
import isLoggedIn from '../helper/is_logged_in'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    firebase
    .auth()
    .onAuthStateChanged(authUser => {
        if(authUser){
          history.push(routes.APP)   
        }
    })
  })

  function handleSubmit( e ) {
    e.preventDefault();
    setIsLoading(true);
    firebase 
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoading(false);
        setEmail('');
        setPassword('');
        history.push(routes.APP);
      })
      .catch((err) => {
        setEmail('');
        setPassword('');
        setIsLoading(false);
        setError(err.message)
      })
  }
    return (
        <form onSubmit={handleSubmit}>
            <p>{error}</p>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <button>Submit</button>{isLoading ? <span>...</span> : null}
            </div>
        </form>
    )
}

export default isLoggedIn(Login);