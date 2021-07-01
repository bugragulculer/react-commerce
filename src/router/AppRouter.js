import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/website/Home';
import Products from '../pages/website/Products';
import Details from '../pages/website/Details';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
            <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/'>
                    <Redirect to='/home'/>
                </Route>
                <Route exact path='/printed'>
                    <Products type="printed"/>
                </Route>
                <Route exact path='/digital'>
                    <Products type="digital"/>
                </Route>
                <Route exact path='/icons'>
                    <Products type="icons"/>
                </Route>
                <Route exact path='/freebie'>
                    <Products type="freebie"/>
                </Route>
                <Route path='/products/:id'>
                    <Details />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
