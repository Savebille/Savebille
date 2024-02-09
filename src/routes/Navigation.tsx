import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from '../shared/constants/routes';
import Home from '../pages/home';
import { createTheme, ThemeProvider } from '@mui/material';
import ProtectedRoutes from './Protected.routes';
import Login from '../pages/auth/index';
import Stats from '../pages/stats';
import Balance from '../pages/balance';
import Payments from '../pages/payments';

const router = createBrowserRouter([
	{
		id: 'home',
		path: '/',
		element: <ProtectedRoutes redirectPath='/login' />,
		children: [
			{
				id: 'root',
				path: ROUTES.ROOT,
				element: <Home />,
			},
			{
				id: 'stats',
				path : ROUTES.STATS,
				element : <Stats />
			},
			{
				id: 'balance',
				path : ROUTES.BALANCE,
				element : <Balance />
			},
			{
				id: 'payments',
				path : ROUTES.PAYMENTS,
				element : <Payments />
			}

		],
	},
  {
		id: 'login',
		path: ROUTES.LOGIN,
		element: <Login />,
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
