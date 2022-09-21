import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import type { Component } from 'src/lib/types/component';
import type { IProps } from './router';

const Navigation: Component<IProps> = ({ routes, fallback }) => {
    return (
        <BrowserRouter>
            <Router fallback={fallback} routes={routes} />
        </BrowserRouter>
    );
};

export default Navigation;
