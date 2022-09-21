import type { Component } from 'src/lib/types/component';
import { Container, Menu, Glow } from 'src/lib/components';
import { mainMenuItems } from 'src/lib/constants/menu';

const Home: Component = ({ children }) => {
    return (
        <Container
            style={{
                backgroundColor: 'black',
                width: '100%',
                minHeight: '100vh',
            }}
        >
            <Glow 
                style={{
                    position: 'absolute',
                    top: '105%',
                    left: '50%',
                    width: 0,
                    height: 0,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    boxShadow: '0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #a407b5',
                }}
            />
            <Glow 
                style={{
                    position: 'absolute',
                    width: 0,
                    height: 0,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    top: '95%',
                    left: '35%',
                    boxShadow: '0 0 80px 20px #fff, 0 0 80px 60px #f0f, 0 0 160px 100px #a407b5',
                }}
            />
            <Container
                style={{
                    width: '100%',
                    backgroundColor: 'rgba(164, 7, 181, .1)',
                    backdropFilter: 'blur(10px)',
                    flex: 1
                }}
            >
                <Menu menuItems={mainMenuItems} />
                {children as React.ReactNode}
            </Container>
        </Container>
    );
};

export default Home;
