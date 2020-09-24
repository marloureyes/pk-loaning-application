import React, {useEffect} from 'react';
import firebase from '../firebase';
import * as routes from '../routes/routes';
import { useHistory } from 'react-router-dom'

export function isLoggedIn(Component){
    const Wrapper = () => {
        let history = useHistory();
        useEffect(() => {
            firebase
            .auth()
            .onAuthStateChanged(authUser => {
                if(authUser){
                  history.push(routes.APP)   
                }
            })
        })
    return (
            <Component />

    )
    };

    return Wrapper;
};

export default isLoggedIn;