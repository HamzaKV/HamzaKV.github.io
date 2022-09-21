import { Text } from 'src/lib/components';
import type { Component } from 'src/lib/types/component';

interface IProps {
    initials: string;
    width?: number;
}

const ProfilePicture: Component<IProps> = ({ initials, width }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                backgroundColor: 'white',
                height: width,
                borderRadius: '50%',
            }}
        >
            <Text type='t6'>{initials}</Text>
        </div>
    );
};

export default ProfilePicture;
