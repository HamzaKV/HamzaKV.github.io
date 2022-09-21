import type { Component } from 'src/lib/types/component';

export type IProps = JSX.IntrinsicElements['input'];

const InputEmail: Component<IProps> = ({ style, ...other }) => (
    <input type='email' style={style} {...other} />
);

export default InputEmail;
