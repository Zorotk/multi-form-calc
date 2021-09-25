
import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Table from '../pages/table';
import Test from "./test/test";



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path='/table' component={Table} />
                <Route path='/step/:step' component={Test} />
                <Redirect to={'/step/1'} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;
