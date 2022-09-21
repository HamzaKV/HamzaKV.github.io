import { Button, ButtonProps } from '../Button';
import { Icon, IconProps } from 'src/lib/components/atoms/Icon';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    onClick: (event?: React.MouseEvent<HTMLElement>) => void;
    buttonSize: ButtonProps['size'];
    buttonColor?: React.CSSProperties['backgroundColor'];
    iconType: IconProps['type'];
    iconName?: IconProps['name'];
    iconColor?: IconProps['color'];
}

const IconButton: Component<IProps> = ({
    onClick,
    buttonSize,
    buttonColor,
    iconType,
    iconName,
    iconColor,
    style,
}) => (
    <Button
        onClick={onClick}
        size={buttonSize}
        backgroundColor={buttonColor}
        style={{ margin: 0, padding: 0, ...style }}
    >
        <Icon type={iconType} name={iconName} color={iconColor} />
    </Button>
);

export default IconButton;
