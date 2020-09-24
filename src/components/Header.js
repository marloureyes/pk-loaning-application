import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import AuthUserContext from '../auth/AuthUserContext'


export default function HeaderLayout(props){
  let url = props.url;

  function handleLogout(e) {
    firebase
      .auth()
      .signOut()
  }
    return (
        <>
            <div className="header" style={{width: '100%'}}>
            <nav>
            <ul>
              <li>
                <Link to={`${url}form`}>Form</Link>
              </li>
              <li>
                <Link to={`${url}list`}>List</Link>
              </li>
            </ul>
            </nav>
            <AuthUserContext.Consumer> 
                {authUser => 
                  <div style={{maxWidth: '800', display: 'flex', justifyContent: "flex-end"}}>
                    <p>Hello, {authUser.auth.email}</p>
                    <button onClick={e => {handleLogout()}}>Logout</button>
                </div> }
            </AuthUserContext.Consumer>
            </div> 
            {props.children}
        </>
    )
}