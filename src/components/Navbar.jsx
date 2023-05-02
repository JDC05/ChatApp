import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-800 h-24 flex justify-center items-center p-6">
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
