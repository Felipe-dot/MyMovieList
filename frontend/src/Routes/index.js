import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/login';
import Sign from '../pages/sign-up';
import Home from '../pages/home';
import RoutesController from './route';

function Routes() {
    return (
        <Switch>
            <RoutesController path="/" exact component={Login}></RoutesController>
            <RoutesController path="/sign-up" component={Sign}></RoutesController>
            <RoutesController path="/home" isPrivate={true} component={Home}></RoutesController>
        </Switch>
    )
}

export default Routes;