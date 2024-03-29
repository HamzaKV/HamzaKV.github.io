import { useState, useEffect, useRef } from 'react';
import { ScrollDiv, ScrollDivProps } from 'src/lib/components/atoms/ScrollDiv';
import { Spinner } from 'src/lib/components/atoms/Spinner';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    loadMore: () => void;
    maxHeight?: ScrollDivProps['maxHeight'];
}

const InfiniteScroll: Component<IProps> = ({
    children,
    loadMore,
    maxHeight,
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [element, setElement] = useState<any>(null);

    const prevY = useRef<number>(0);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];
                const y = firstEntry.boundingClientRect.y;

                if (prevY.current > y) {
                    setLoading(true);
                }

                prevY.current = y;
            },
            { threshold: 1 }
        )
    );

    useEffect(() => {
        if (loading) {
            loadMore();
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loadMore, loading]);

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement && IntersectionObserver && currentObserver) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement && currentObserver) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);

    return (
        <ScrollDiv maxHeight={maxHeight}>
            {children as React.ReactNode}
            <div
                ref={setElement}
                style={{
                    height: 150,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {loading && (
                    <div style={{ marginTop: 20, width: 'fit-content' }}>
                        <Spinner width={50} thickness={8} />
                    </div>
                )}
            </div>
        </ScrollDiv>
    );
};

export default InfiniteScroll;
