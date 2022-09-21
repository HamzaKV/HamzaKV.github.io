// eslint-disable-next-line @typescript-eslint/ban-types
export type Component<T = {}> = React.FC<
    {
        className?: string;
        style?: React.CSSProperties;
        children?:
            | React.ReactNode[]
            | JSX.Element[]
            | React.ReactNode
            | JSX.Element
            | typeof React.Children;
    } & T
>;
