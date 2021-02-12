import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Pricing from '../components/Pricing';
import Landing from '../components/Landing';

const Routes: React.FC = (props: any) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/pricing" component={Pricing}></Route>
                <Route path="/" component={Landing}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;