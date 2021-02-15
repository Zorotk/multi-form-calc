import React from 'react';

import {BrowserRouter, Redirect, Route, Switch, useParams} from "react-router-dom";
import Test from "./test/test";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/step/:step' component={Test}/>
                <Redirect to={'/step/1'}/>
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;