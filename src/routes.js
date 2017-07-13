import NotFound from './components/NotFound';
import Home from './containers/Home';

export default [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];
