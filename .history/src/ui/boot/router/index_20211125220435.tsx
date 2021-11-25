import React from "react";
import { Route, Switch } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';
import Header from "ui/pages/header";
import IdxHome from "ui/pages/home";
import IdxProfile from "ui/pages/home/profile";
import IdxLogIn from "pages/logIn/index";
import IdxSignUp from "ui/pages/signUp";







const Routing = () => {

    return (
        <>

            <BrowserRouter>
                <Header />
                <Switch>

                    <Route path='/' component={IdxHome} />
                    <Route exact path='/login' component={IdxLogIn} />
                    <Route exact path='/signup' component={IdxSignUp} />
                    <Route exact path='/profile' component={IdxProfile} />
                </Switch>
            </BrowserRouter>

        </>
    )
}

export default Routing;