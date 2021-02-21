import React, { useState, useEffect } from 'react'

export const AsyncComponent = (getComponent: () => Promise<() => JSX.Element>) => {
    const LazyComponent: React.FC & { Component: () => JSX.Element | null } = (props: any) => {
        const [componentLoading, setComponentLoading] = useState<boolean>(false);

        useEffect(() => {
            !componentLoading && getComponent().then((Module: () => JSX.Element) => {
                LazyComponent.Component = Module;
                setComponentLoading(true);
            });
        }, []);

        return LazyComponent.Component ? <LazyComponent.Component />: null;
    }

    LazyComponent.Component = () => null;

    return LazyComponent;
}

export default AsyncComponent;