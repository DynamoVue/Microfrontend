import React, { useEffect, useContext, useRef } from 'react';
import { Location } from "history";
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../bootstrap';
//@ts-ignore
import { mount } from 'dashboard/DashboardApp';

const DashboardApp: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { globalStore } = useContext(AppContext);
    const history = useHistory();

    const onNavigate = (location: Location) => {
        const { pathname } = history.location;
        const { pathname: nextPathName } = location;

        if (pathname !== nextPathName) {
            history.push(nextPathName);
        }
    }
    
    useEffect(() => {
        const { onContainerNavigate } = mount(ref.current, {
            onNavigate,
            history,
            globalStore
        });

        history.listen(onContainerNavigate);
    }, []);

    return (
        <div ref={ref}></div>
    )
}

export default DashboardApp;