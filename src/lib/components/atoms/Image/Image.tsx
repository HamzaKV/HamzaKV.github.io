import { Image as BaseImage } from 'src/lib/components/nuclei/Image';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    height?: React.CSSProperties['height'];
    width?: React.CSSProperties['width'];
    alt: string;
    src: string;
    shape?: 'rect' | 'round';
    srcset?: {
        minWidth?: React.CSSProperties['minWidth'];
        src: any;
        orientation?: string;
    }[];
}

const Image: Component<IProps> = ({
    height = 100,
    width = 100,
    alt,
    src,
    style,
    shape = 'rect',
    srcset = [],
}) => (
    <picture>
        {srcset.map((image, key) => (
            <source
                key={key}
                media={`${
                    image.orientation
                        ? `(orientation(${image.orientation})) and `
                        : ''
                }(min-width: ${image.minWidth ?? 0}px)`}
                srcSet={image.src}
            />
        ))}
        <BaseImage
            alt={alt}
            src={src}
            style={{
                height: shape === 'round' ? width : height,
                width: width,
                borderRadius: shape === 'round' ? '50%' : 'inherit',
                ...style,
            }}
        />
    </picture>
);

export default Image;
