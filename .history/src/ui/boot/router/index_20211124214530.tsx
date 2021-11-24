import React from "react";
import { Route, Switch } from "react-router-dom";


import { BrowserRouter } from 'react-router-dom';

import Header from "../../pages/header";







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