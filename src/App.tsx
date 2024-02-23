import { Routes, Route } from "react-router-dom";
import ROUTES from "./shared/constants/routes";
import SignInForm from "./_auth/forms/signInForm";
import SignUpForm from "./_auth/forms/signUpForm";
import { Categories, Help, Home, Payments, Settings, Stats } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.SIGN_IN} element={<SignInForm />}></Route>
          <Route path={ROUTES.SIGN_UP} element={<SignUpForm />}></Route>
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path={ROUTES.CATEGORIES} element={<Categories />}></Route>
          <Route path={ROUTES.STATS} element={<Stats />}></Route>
          <Route path={ROUTES.PAYMENTS} element={<Payments />}></Route>
          <Route path={ROUTES.SETTINGS} element={<Settings />}></Route>
          <Route path={ROUTES.HELP} element={<Help />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
