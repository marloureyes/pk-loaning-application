import React, { Children, useEffect, useState } from 'react';
import AuthUserContext from "./AuthUserContext"; //using provider's context api
import firebase from "../firebase";

function withAuth(Component) {
    const WrappedComponent = () => {
        const [ authUser, setAuthUser] = useState();
        useEffect(
            () => {
                firebase
                    .auth()
                    .onAuthStateChanged((auth) => {
                    auth 
                        ? setAuthUser({auth}) : setAuthUser(null)
                    })
            }, []
        );

    return (
        <AuthUserContext.Provider value={authUser}>
            <Component children={Children} />
        </AuthUserContext.Provider>
    )
    };

    return WrappedComponent;
};

export default withAuth;