import { Container } from 'src/lib/components';
import type { Component } from 'src/lib/types/component';

const Glow: Component = ({ style, children }) => {
    return (
        <Container
            style={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: 'white',
                boxShadow: '0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #a407b5',
                ...style,
            }}
        >
            {children as React.ReactNode}
        </Container>
    );
};

export default Glow;
