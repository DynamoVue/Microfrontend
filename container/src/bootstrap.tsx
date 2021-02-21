import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStore, IGlobalStore } from 'redux-micro-frontend';

import App from './App';

type AppContextType = {
    globalStore: IGlobalStore
};

export const AppContext =  React.createContext<Partial<AppContextType>>({});

// Mount function to start up the app
const mount = (el: Element) => {
    const globalStore = GlobalStore.Get();

    ReactDOM.render(
        <AppContext.Provider value={{ globalStore }}>
            <App />
        </AppContext.Provider>, 
    el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#root');
    
    devRoot && mount(devRoot);
}

export { mount };