import type { RoutesArray } from 'src/lib/types/navigator';
import HomeScreen from 'src/screens/Home';

export const routes: RoutesArray = [
    {
        path: '/',
        Component: HomeScreen,
        type: 'public',
        title: 'Home',
        index: true,
    },
];
