import React from "react";
import {  Route, Switch } from "react-router-dom";
import IdxHome from "../../pages/home";
import IdxLogIn from "../../pages/logIn";
import IdxSignUp from "../../pages/signUp";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "../../../core/store/redux";

const Routing = () => {

    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={IdxHome} />
            <Route exact path='/login' component={IdxLogIn}/>
            <Route exact path='/signup' component={IdxSignUp}/>
        </Switch>
        </Provider>
        </BrowserRouter>
    )
}

export default Routing;