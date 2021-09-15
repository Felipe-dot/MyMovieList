import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function RoutesController({ isPrivate = false, component: Component, ...rest }) {
    const user = localStorage.getItem('@aplicacao:user')
    return <Route {...rest} render={() => {
        return isPrivate === !!user ? (<Component/>) : (
            <Redirect to={{
                pathname: isPrivate ? '/' : '/home',
            }}/>
        );
    }}></Route>;
}

export default RoutesController;