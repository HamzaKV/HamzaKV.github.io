import { ActionView } from 'src/lib/components/atoms/ActionView';
import type { Component } from 'src/lib/types/component';

const sizes = {
    xl: {
        width: 250,
        height: 70,
    },
    lg: {
        width: 200,
        height: 50,
    },
    md: {
        width: 150,
        height: 40,
    },
    sm: {
        width: 100,
        height: 30,
    },
    xs: {
        width: 50,
        height: 20,
    },
};

export interface IProps {
    onClick: (event?: React.MouseEvent<HTMLElement>) => void;
    size: keyof typeof sizes;
    backgroundColor?: string;
    fontColor?: string;
}

const Button: Component<IProps> = ({
    children,
    onClick,
    size,
    backgroundColor,
    fontColor,
    style,
}) => (
    <ActionView
        onClick={onClick}
        style={{
            width: sizes[size]?.width ?? 'auto',
            height: sizes[size]?.height ?? 'auto',
            ...style,
        }}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
    >
        {children}
    </ActionView>
);

export default Button;
