import { Routes, Route } from 'react-router-dom';
import ROUTES from './shared/constants/routes';
import SignInForm from './_auth/forms/signInForm';
import SignUpForm from './_auth/forms/signUpForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.SIGNIN} element={<SignInForm />}></Route>
          <Route path={ROUTES.SIGNUP} element={<SignUpForm />}></Route>
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
