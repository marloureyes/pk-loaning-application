import React from 'react';
import HeaderLayout from '../components/Header';
import Form from '../components/Form';
import List from '../components/List';
import withAuthorization from '../auth/withAuthorization';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function ListApp() {
    let { url } = useRouteMatch();  
    return (
        <HeaderLayout url ={url}>
            <Switch>
                <Route path={'/form'} component={Form} />
                <Route path={'/list'} component={List} />
            </Switch>
        </HeaderLayout>
    )
}
export default withAuthorization(ListApp);