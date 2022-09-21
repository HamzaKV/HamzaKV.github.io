import type { Component } from 'src/lib/types/component';

export type IProps = JSX.IntrinsicElements['input'];

const InputField: Component<IProps> = ({ style, ...other }) => (
    <input
        size={1}
        pattern='[ \S]+'
        autoComplete='off'
        style={style}
        {...other}
    />
);

export default InputField;
