import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import SignInPage from "./sign-in";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const ProtectedRoutes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <SignedIn>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </SignedIn>
      <SignedOut>
        <SignInPage />
        <Outlet />
      </SignedOut>
    </ClerkProvider>
  );
};

export default React.memo(ProtectedRoutes);
