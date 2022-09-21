import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { Component } from 'src/lib/types/component';

const ScrollToTop: Component = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
