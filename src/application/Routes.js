import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Pressupost from '../pages/Pressupost';
import Home from '../pages/Home';

const Routes = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/pressupost' component={Pressupost} />
            <Route path='*' component={()=><div>404</div>}></Route>
        </Switch>
    </BrowserRouter>

export default Routes;