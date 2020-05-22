import RouteType from './types/route';

//components import
import HomePage from './components/pages/home/index';

const Routes: RouteType[] = [
    {
        url: '/',
        exact: true,
        title: 'Home',
        component: HomePage
    }
]

export default Routes;