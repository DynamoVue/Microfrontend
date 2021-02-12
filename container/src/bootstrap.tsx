import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Mount function to start up the app
const mount = (el: Element) => {
    ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#root');
    
    devRoot && mount(devRoot);
}

export { mount };