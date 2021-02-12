import React, { useEffect, useRef } from 'react';

//@ts-ignore
import { mount } from 'marketing/MarketingApp';

const MarketingApp: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        mount(ref.current);
    }, []);

    return (
        <div ref={ref}></div>
    )
}

export default MarketingApp;