import React, { useContext, lazy } from 'react'
import { Switch, Route, Router } from 'react-router-dom';

import AsyncComponent from '../components/AsyncComponent';
import { AppContext } from '../bootstrap';

const Landing = lazy(() => import("../components/Landing"));
const Pricing = lazy(() => import("../components/Pricing"));

const AsyncPricing = AsyncComponent(() => import('../components/Pricing').then(module => module.default));
const AsyncLanding = AsyncComponent(() => import('../components/Landing').then(module => module.default));

const Routes: React.FC = () => {
    const { onNavigate, history } = useContext(AppContext);

    onNavigate && history.listen(onNavigate);

    return (
        <Router history={history}>
            <React.Suspense fallback={<p>Loading ...!</p>}>
                <Switch>
                    <Route exact path="/pricing" component={AsyncPricing}></Route>
                    <Route path="/" component={AsyncLanding}></Route>
                </Switch>
            </React.Suspense>
        </Router>
    )
}

export default Routes;