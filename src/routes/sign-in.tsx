import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <SignIn />
    </div>
  );
}
