import { Container } from 'src/lib/components/nuclei/Container';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    maxHeight?: React.CSSProperties['maxHeight'];
}

const ScrollDiv: Component<IProps> = ({ children, maxHeight }) => (
    <Container
        style={{
            maxHeight: maxHeight,
            overflowY: 'auto',
            overflowX: 'hidden',
        }}
    >
        {children as React.ReactNode}
    </Container>
);

export default ScrollDiv;
