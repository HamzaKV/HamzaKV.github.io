import { Container } from 'src/lib/components/nuclei/Container';
import type { Component } from 'src/lib/types/component';

const Page: Component = ({ children, style }) => (
    <Container
        style={Object.assign(
            {},
            {
                width: '100%',
                maxWidth: 1200,
                minWidth: 250,
                marginRight: 'auto',
                marginLeft: 'auto',
                minHeight: '85vh',
            },
            style
        )}
    >
        {children as React.ReactNode}
    </Container>
);

export default Page;
