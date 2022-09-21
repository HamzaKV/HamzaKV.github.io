import React, { createContext, useState } from 'react';
import useCacheState from '../hooks/cache-state';
import usePersistentCacheState from '../hooks/persistent-cache-state';

interface IProps {
    children: React.ReactNode;
    queries: {
        authenticate: (provider: string, data?: any) => Promise<any>;
        logout: (token: string) => Promise<boolean>;
        refreshToken: (token: string) => Promise<string>;
    };
}

interface IContext {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
    getAccessToken: () => string;
    setAccessToken: (newValue: string) => void;
    getRefreshToken: () => string;
    setRefreshToken: (newValue: string) => void;
    queries: IProps['queries'];
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AuthContext = createContext<IContext>(null);

/**
 * It's a React context that provides the authentication state and the authentication tokens to its children.
 * @param {IProps} props - IProps
 * @returns The AuthContextProvider is being returned.
 */
const AuthContextProvider = (props: IProps) => {
    const [auth, setAuth] = useState<boolean>(true);
    const [getAccessToken, setAccessToken] = useCacheState<string>('');
    const [getRefreshToken, setRefreshToken] = usePersistentCacheState<string>(
        'token',
        ''
    );

    const value = {
        auth,
        setAuth,
        getAccessToken,
        setAccessToken,
        getRefreshToken,
        setRefreshToken,
        queries: props.queries,
    };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, AuthContext };
