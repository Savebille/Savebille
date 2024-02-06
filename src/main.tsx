import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInPage from "./routes/sign-in.tsx";
import SignUpPage from "./routes/sign-up.tsx";
import ProtectedRoutes from "./routes/Protected.routes.tsx";
import Home from "./pages/home/index.tsx";
import Categories from "./pages/categories/index.tsx";
import UpcomingPayments from "./pages/upcomingPayments/index.tsx";
import Stats from "./pages/stats/index.tsx";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/categories", element: <Categories /> },
      {
        path: "/upcoming-payments",
        element: <UpcomingPayments />,
      },
      {
        path: "/stats",
        element: <Stats />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
