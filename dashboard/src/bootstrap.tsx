import React from 'react';
import ReactDOM from 'react-dom';
import { Location, History, createMemoryHistory, createBrowserHistory } from "history";
import { GlobalStore, IGlobalStore } from 'redux-micro-frontend';

import { memoryHistory } from './history';
import App from './App';

type AppContextType = {
    onNavigate: (() => void) | undefined,
    history: History,
    globalStore: IGlobalStore | undefined
}

export const AppContext = React.createContext<AppContextType>({
    history: createMemoryHistory(),
    onNavigate: () => {},
    globalStore: GlobalStore.Get()
});

const onContainerNavigate = (location: Location) => {
    const { pathname } = memoryHistory.location;
    const { pathname: nextPathName } = location;

    if (pathname !== nextPathName) {
        memoryHistory.push(nextPathName);
    }
}

// Mount function to start up the app
const mount = (el: Element, { onNavigate, history: defaultHistory, globalStore }: { onNavigate?: () => void, history?: History, globalStore?: IGlobalStore }) => {
    const history = defaultHistory || memoryHistory;

    ReactDOM.render(
        <AppContext.Provider value={{ onNavigate, history, globalStore }}>
            <App />
        </AppContext.Provider>, 
        el
    );

    return {
        onContainerNavigate
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    devRoot && mount(devRoot, { history: createBrowserHistory() });
}

export { mount };