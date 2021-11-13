import React from "react";
import {  Route, Switch } from "react-router-dom";
import IdxHome from "../../pages/home";
import IdxLogIn from "../../pages/logIn";
import IdxSignUp from "../../pages/signUp";
import { BrowserRouter } from 'react-router-dom';

const Routing = () => {

    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={IdxHome} />
            <Route exact path='/login' component={IdxLogIn}/>
            <Route exact path='/signup' component={IdxSignUp}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routing;