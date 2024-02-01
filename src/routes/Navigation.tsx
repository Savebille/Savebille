import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from '../shared/constants/routes';
import Home from '../pages/home';
import { createTheme, ThemeProvider } from '@mui/material';
import ProtectedRoutes from './Protected.routes';
import Login from '../pages/auth/index';

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
