import { Container } from 'src/lib/components/nuclei/Container';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Section: Component<IProps> = ({ children, style }) => (
    <Container
        style={Object.assign(
            {},
            {
                width: '80%',
                maxWidth: 1000,
                overflowWrap: 'break-word',
            },
            style
        )}
    >
        {children as React.ReactNode}
    </Container>
);

export default Section;
