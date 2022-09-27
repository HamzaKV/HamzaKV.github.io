import { useMemo } from 'react';
import {
    useLocation,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import ScrollToTop from './scroll-to-top';
import useWindowTitle from 'src/lib/controls/hooks/window-title';
import useAuth from 'src/lib/controls/hooks/auth';
import type { Component } from 'src/lib/types/component';
import type { RoutesArray } from 'src/lib/types/navigator';

export interface IProps {
    fallback: any;
    routes: RoutesArray;
}

const Router: Component<IProps> = ({ routes }) => {
    const { pathname } = useLocation();
    const { auth } = useAuth();

    const selectedRoute = useMemo(
        () => routes.find((route) => route.path === pathname),
        [pathname, routes]
    );

    useWindowTitle(selectedRoute?.title, [pathname]);

    const notFoundRoute = useMemo(
        () => routes.find((route) => route.path === '*'),
        [routes]
    );

    return (
        <>
            <ScrollToTop />
            <Routes>
                {routes.map((route, key) => {
                    const { path, Component, type, redirect, index } = route;
                    const isIndex = index || path === '/';

                    if (path === '*') return null;

                    switch (type) {
                        case 'public':
                            return (
                                <Route
                                    key={key}
                                    path={path}
                                    element={<Component />}
                                    index={isIndex}
                                />
                            );
                        case 'publiconly':
                            return (
                                <Route
                                    key={key}
                                    path={path}
                                    element={
                                        !auth ? (
                                            (<Component />)
                                        ) : (
                                            <Navigate
                                                replace
                                                to={redirect || '/home'}
                                            />
                                        )
                                    }
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    index={isIndex}
                                />
                            );
                        case 'private':
                            return (
                                <Route
                                    key={key}
                                    path={path}
                                    element={
                                        auth ? (
                                            (<Component />)
                                        ) : (
                                            <Navigate
                                                replace
                                                to={redirect || '/'}
                                            />
                                        )
                                    }
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    index={isIndex}
                                />
                            );
                    }
                })}
                {notFoundRoute && (
                    <Route
                        path='*'
                        element={
                            <notFoundRoute.Component />
                        }
                    />
                )}
            </Routes>
        </>
    );
};

export default Router;
