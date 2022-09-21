import { Text as BaseText } from 'src/lib/components/nuclei/Text';
import type { Component } from 'src/lib/types/component';

const fontSizes = {
    t1: '3rem',
    t2: '2.5rem',
    t3: '2.25rem',
    t4: '2rem',
    t5: '1.75rem',
    t6: '1.5rem',
    t7: '1.25rem',
    t8: '1rem',
    t9: '0.75rem',
    t10: '0.5rem',
};

export interface IProps {
    type: keyof typeof fontSizes;
    color?: string;
    className?: string;
    responsive?: boolean;
}

const Text: Component<IProps> = ({
    children,
    type,
    color,
    style,
    className,
    responsive,
}) => (
    <BaseText
        style={{
            fontSize: fontSizes[type] ?? fontSizes['t8'],
            color: color,
            width: 'fit-content',
            ...style,
        }}
        className={className}
        responsive={responsive}
    >
        {children as React.ReactNode}
    </BaseText>
);

export default Text;
