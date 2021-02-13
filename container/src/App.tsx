import React from 'react';

import MarketingApp from './components/MarketingApp';

const App: React.FC<any> = (props: any) => {
    return (
       <div>
            <h1>Hello from Containers</h1>
            <hr />
            <MarketingApp />
       </div>
    )
}

export default App;