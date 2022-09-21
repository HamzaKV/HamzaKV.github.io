import type { Component } from 'src/lib/types/component';

export type RoutesArray = Array<{
    path: string;
    Component: Component;
    type: 'public' | 'publiconly' | 'private';
    redirect?: string;
    title: string;
    index?: boolean;
}>;
