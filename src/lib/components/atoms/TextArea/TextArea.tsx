import type { Component } from 'src/lib/types/component';

export type IProps = JSX.IntrinsicElements['textarea'];

const TextArea: Component<IProps> = ({ style, ...other }) => (
    <textarea style={style} {...other}></textarea>
);

export default TextArea;
