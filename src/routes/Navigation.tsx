import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import ROUTES from '../shared/constants/routes';
import Home from '../pages/home';
import ProtectedRoutes from './Protected.routes';
import Stats from '../pages/stats';
import Payments from '../pages/payments';
import Auth from '../pages/auth/index';
import Categories from '../pages/categories';
import Settings from '../pages/settings';
import Help from '../pages/help';

const router = createBrowserRouter([
  {
    id: 'home',
    path: '/',
    element: <ProtectedRoutes redirectPath={ROUTES.AUTH} />,
    children: [
      {
        id: 'root',
        path: ROUTES.ROOT,
        element: <Home />,
      },
      {
        id: 'categories',
        path: ROUTES.CATEGORIES,
        element: <Categories />,
      },
      {
        id: 'stats',
        path: ROUTES.STATS,
        element: <Stats />,
      },
      {
        id: 'payments',
        path: ROUTES.PAYMENTS,
        element: <Payments />,
      },
      {
        id:'settings',
        path: ROUTES.SETTINGS,
        element: <Settings />,
      },
      {
        id:'help',
        path: ROUTES.HELP,
        element: <Help />,
      }
    ],
  },
  {
    id: 'auth',
    path: ROUTES.AUTH,
    element: <Auth/>,
  },
]);

const darkTheme = createTheme({
	palette: {
		mode: 'light',
	},
});

const Navigation = () => {
	return (
			<ThemeProvider theme={darkTheme}>
				<RouterProvider router={router} />
			</ThemeProvider>
	);
};

export default Navigation;
