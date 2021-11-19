import React from "react";
import { Route, Switch } from "react-router-dom";
import IdxHome from "../../pages/home";
import IdxLogIn from "../../pages/logIn";
import IdxSignUp from "../../pages/signUp";
import { BrowserRouter } from 'react-router-dom';
import IdxProfile from "../../pages/home/profile";
import Header from "../../pages/header";

const Routing = () => {

    return (
        <>

            <BrowserRouter>
                <Header photo={""} status={""} LogOut={undefined} />
                <Switch>

                    <Route exact path='/' component={IdxHome} />
                    <Route exact path='/login' component={IdxLogIn} />
                    <Route exact path='/signup' component={IdxSignUp} />
                    <Route exact path='/profile' component={IdxProfile} />
                </Switch>
            </BrowserRouter>

        </>
    )
}

export default Routing;