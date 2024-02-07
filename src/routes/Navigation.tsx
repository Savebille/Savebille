import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import ROUTES from '../shared/constants/routes';
import Home from '../pages/home';
import ProtectedRoutes from './Protected.routes';
import Authentication from '../pages/auth/index';

const router = createBrowserRouter([
  {
    id: 'home',
    path: '/',
    element: <ProtectedRoutes redirectPath='/authentication' />,
    children: [
      {
        id: 'root',
        path: ROUTES.ROOT,
        element: <Home />,
      },
    ],
  },
  {
    id: 'authentication',
    path: ROUTES.LOGIN,
    element: <Authentication />,
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
