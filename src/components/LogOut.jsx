import React from 'react';
import { auth } from '../firebase';

function LogOut() {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-500 text-white rounded-full px-6 py-3 font-bold hover:bg-red-700"
    >
      Log Out
    </button>
  );
}

export default LogOut;
