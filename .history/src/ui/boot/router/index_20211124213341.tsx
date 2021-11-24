import React from "react";
import { Route, Switch } from "react-router-dom";
import IdxLogin from "../../pages/logIn/index";
import IdxSignUp from "../../pages/signUp";
import { BrowserRouter } from 'react-router-dom';
import IdxProfile from "../../pages/home/profile";
import Header from "../../pages/header";
import IdxHome from "../../pages/home";





const Routing = () => {

    return (
        <>

            <BrowserRouter>
                <Header />
                <Switch>

                    <Route exact path='/' component={IdxHome} />
                    <Route exact path='/login' component={IdxLogin} />
                    <Route exact path='/signup' component={IdxSignUp} />
                    <Route exact path='/profile' component={IdxProfile} />
                </Switch>
            </BrowserRouter>

        </>
    )
}

export default Routing;