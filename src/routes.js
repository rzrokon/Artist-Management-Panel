import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import Albums from './components/Albums/Albums';
import Tracks from './components/Tracks/Tracks';
import History from './components/History/History';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Dashboard} />
            <Route path='/albums' component={Albums} />
            <Route path='/tracks' component={Tracks} />
            <Route path='/history' component={History} />
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;