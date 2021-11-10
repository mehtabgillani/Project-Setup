import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/loginUtils';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/online_marketing_dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;