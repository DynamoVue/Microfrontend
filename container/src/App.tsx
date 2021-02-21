import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import MarketingApp from './components/MarketingApp';
import DashboardApp from './components/DashboardApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App: React.FC<any> = (props: any) => {
    return (
       <Router>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Link to="/dashboard">Go to dashboard</Link>
                    <Switch>
                        <Route path="/" component={MarketingApp} exact />
                        <Route path="/dashboard" component={DashboardApp} />
                    </Switch>
                </div>
            </StylesProvider>
       </Router>
    )
}

export default App;