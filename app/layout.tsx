import type { Component, JSX } from 'solid-js';
import GlowBackground from '../lib/components/GlowBackground';
import Nav from '../lib/components/Nav';
import './globals.css';

export const generateMeta = () => ({
    title: {
        type: 'title',
        attributes: {},
        content: 'Hamza Varvani',
    },
    description: {
        type: 'meta',
        attributes: {
            name: 'description',
            content:
                'Hamza Varvani — CTO at Zown, creator of solidstep, full-stack software engineer.',
        },
    },
    favicon: {
        type: 'link',
        attributes: {
            rel: 'icon',
            href: '/favicon.svg',
            type: 'image/svg+xml',
        },
    },
});

const Layout: Component<{ children: () => JSX.Element }> = (props) => {
    return (
        <body>
            <div class="page-shell">
                <GlowBackground />
                <div class="page-content">
                    <Nav />
                    <main>{props.children()}</main>
                </div>
            </div>
        </body>
    );
};

export default Layout;
