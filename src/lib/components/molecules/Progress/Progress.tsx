import { Spinner } from 'src/lib/components/atoms/Spinner';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    type?: 'linear' | 'circular';
}

const Progress: Component<IProps> = ({ type = 'circular' }: IProps) => {
    switch (type) {
        case 'circular':
        default:
            return <Spinner />;
    }
};

export default Progress;
