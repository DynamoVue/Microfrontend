import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import Routes from './routes';

const App: React.FC<any> = (props: any) => {
    return (
        <StylesProvider>
            <Routes />
        </StylesProvider>
    )
}

export default App;