import styles from './styles.module.css';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    variant: 'rect' | 'circle';
    width?: number;
    height?: number;
}

const Skeleton: Component<IProps> = ({
    variant,
    width = 150,
    height = 25,
    style,
}) => (
    <div
        className={styles.skeleton}
        style={{
            borderRadius: variant === 'circle' ? '50%' : 0,
            width: width,
            height: variant === 'circle' ? width : height,
            ...style,
        }}
    />
);

export default Skeleton;
