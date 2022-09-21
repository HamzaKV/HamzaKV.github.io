import type { Component } from 'src/lib/types/component';

export type IProps = JSX.IntrinsicElements['div'];

const Container: Component<IProps> = ({ children, style, ...other }) => (
    <div style={Object.assign({}, defaultProps.style, style)} {...other}>
        {children}
    </div>
);

const defaultProps = {
    style: {
        display: 'flex',
        flexDirection: 'column',
        // width: 'max-content'
    },
};

export default Container;
