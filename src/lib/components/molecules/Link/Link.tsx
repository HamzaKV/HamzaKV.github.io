import { ActionView } from 'src/lib/components/atoms/ActionView';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    backgroundColor: string;
    containerStyle?: React.CSSProperties;
    link: JSX.IntrinsicElements['a']['href'];
}

const Link: Component<IProps> = ({
    children,
    onClick,
    backgroundColor,
    containerStyle,
    link,
    style,
}) => (
    <ActionView
        backgroundColor={backgroundColor}
        style={{ width: 'fit-content', ...containerStyle }}
    >
        <a
            href={link}
            onClick={(e) => {
                if (onClick) onClick(e);
            }}
            referrerPolicy='no-referrer'
            rel='noreferrer	'
            style={{ textDecoration: 'none', ...style }}
        >
            {children as React.ReactNode}
        </a>
    </ActionView>
);

export default Link;
