import type { Component } from 'src/lib/types/component';

export interface IProps {
    width: string | number;
    height: string | number;
}

const Spacer: Component<IProps> = ({ width, height, style }) => {
    return <div style={{ width, height, ...style }} />;
};

export default Spacer;
