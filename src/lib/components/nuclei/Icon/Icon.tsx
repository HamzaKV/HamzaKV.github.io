import { IconContext } from 'react-icons';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    IconTag: React.ComponentType;
    color?: string;
    size?: string;
    align?: string;
}

const Icon: Component<IProps> = ({
    IconTag,
    color = 'white',
    size = '50px',
    align = 'middle',
}) => (
    <IconContext.Provider
        value={{
            color: color,
            size: size,
            style: { verticalAlign: align },
        }}
    >
        <IconTag />
    </IconContext.Provider>
);

export default Icon;
