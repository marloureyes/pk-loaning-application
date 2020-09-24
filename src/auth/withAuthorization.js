import React, { Children, useEffect } from 'react';
import AuthUserContext from '../auth/AuthUserContext';
import firebase from '../firebase';
import * as routes from '../routes/routes';
import { useHistory } from 'react-router-dom';

function withAuthorization( Component ) {
    const WrapperContainer = () => {
    let history = useHistory();

    useEffect(() => {
        firebase
        .auth()
        .onAuthStateChanged(authUser => {
            if(!authUser){
              history.push(routes.LOGIN)   
            }
        })
    })
    

    return(
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <Component children={Children} />
                ) : null
            }
        </AuthUserContext.Consumer>
    )
    }
    return WrapperContainer;
}

export default withAuthorization;