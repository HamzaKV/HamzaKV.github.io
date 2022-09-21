import type { Component } from 'src/lib/types/component';
import { Container, Link, Text } from 'src/lib/components';
import { MenuItem } from 'src/lib/types/menu';

export interface IProps {
    menuItems: MenuItem[];
}

const Menu: Component<IProps> = ({ menuItems }) => {
    return (
        <Container
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '20px 0',
            }}
        >
            {menuItems.map((item, index) => {
                if (item.path)
                    return (
                        <Link
                            key={index}
                            link={item.path}
                            backgroundColor='transparent'
                            containerStyle={{
                                padding: '5px 10px',
                            }}
                            style={{
                                color: 'white',
                            }}
                        >
                            <Text type='t5' >{item.label}</Text>
                        </Link>
                    );
                return null;
            })}
        </Container>
    );
};

export default Menu;
