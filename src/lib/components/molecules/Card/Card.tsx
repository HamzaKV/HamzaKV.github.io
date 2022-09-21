import type { Component } from 'src/lib/types/component';

export interface IProps {
    backgroundColor: React.CSSProperties['backgroundColor'];
    shadow: React.CSSProperties['boxShadow'];
}

const Card: Component<IProps> = ({
    children,
    backgroundColor,
    shadow,
    style,
}) => (
    <div
        style={{
            backgroundColor: backgroundColor,
            borderRadius: 8,
            minHeight: 200,
            padding: 20,
            boxShadow: shadow,
            position: 'relative',
            ...style,
        }}
    >
        {children as React.ReactNode}
    </div>
);

export default Card;
