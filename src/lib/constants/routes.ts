import type { RoutesArray } from 'src/lib/types/navigator';
import HomeScreen from 'src/screens/Home';
import ProjectsScreen from 'src/screens/Projects';

export const routes: RoutesArray = [
    {
        path: '/',
        Component: HomeScreen,
        type: 'public',
        title: 'Home',
        index: true,
    },
    {
        path: '/projects',
        Component: ProjectsScreen,
        type: 'public',
        title: 'Projects',
    },
];
