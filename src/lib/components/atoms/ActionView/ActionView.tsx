import { Container } from 'src/lib/components/nuclei/Container';
import styles from './styles.module.css';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
    backgroundColor?: string;
    fontColor?: string;
}

const ActionView: Component<IProps> = ({
    children,
    style,
    onClick,
    backgroundColor,
    fontColor,
}) => (
    <Container
        style={Object.assign(
            {},
            {
                cursor: 'pointer',
                backgroundColor: backgroundColor,
                color: fontColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            style
        )}
        onClick={onClick}
        className={styles.actionView}
    >
        {children as React.ReactNode}
    </Container>
);

export default ActionView;
