import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import type { Component } from 'src/lib/types/component';

export interface IProps {
    id: string;
    parent?: HTMLElement;
}

const ReactPortal: Component<IProps> = ({
    children,
    id,
    parent,
    className,
}) => {
    const containerEl = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        const targetEl = parent ?? document.body;

        containerEl.id = id;
        if (className) containerEl.classList.add(className);

        targetEl.appendChild(containerEl);

        return () => {
            targetEl.removeChild(containerEl);
        };
    }, [className, containerEl, id, parent]);

    return createPortal(children as React.ReactNode, containerEl);
};

export default ReactPortal;
