import type { Component } from 'src/lib/types/component';

export type IProps = JSX.IntrinsicElements['input'];

const InputPassword: Component<IProps> = ({ style, ...other }) => (
    <input type='password' style={style} {...other} />
);

export default InputPassword;
