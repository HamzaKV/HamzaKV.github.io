import { HashRouter } from 'react-router-dom';
import Router from './router';
import type { Component } from 'src/lib/types/component';
import type { IProps } from './router';

const Navigation: Component<IProps> = ({ routes, fallback }) => {
    return (
        <HashRouter>
            <Router fallback={fallback} routes={routes} />
        </HashRouter>
    );
};

export default Navigation;
