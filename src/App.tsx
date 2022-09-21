import Navigator from 'src/lib/navigator';
import { routes } from 'src/lib/constants/routes';
import { AuthContextProvider } from 'src/lib/controls/contexts/auth';
import { ContextComposer } from 'src/lib/components';

const App = ContextComposer(Navigator, AuthContextProvider);

const Root = () => (
    <App
        routes={routes}
        fallback={<div>loading...</div>}
        queries={{
            authenticate: () => Promise.resolve(),
            logout: () => Promise.resolve(true),
            refreshToken: () => Promise.resolve(''),
        }}
    />
);

export default Root;
