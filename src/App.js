import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-[90vh] bg-gray-700 mt-10 border relative">
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
