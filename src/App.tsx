import React from "react";

import Login from "./pages/auth/index.tsx";
import Home from "./pages/home/index.tsx";
import MainLayout from "./layouts/MainLayout/index.tsx";
import ProtectedPage from "./pages/protectedPage/index.tsx";
import ProtectedRoutes from "./routes/Protected.routes.tsx";
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <p>
          This content is public. Only signed out users can see the SignInButton
          above this text.
        </p>
      </SignedOut>
      <SignedIn>
        <SignOutButton afterSignOutUrl="/" />
        <p>
          This content is private. Only signed in users can see the
          SignOutButton above this text.
        </p>
      </SignedIn>
    </div>
  );
}

export default App;
