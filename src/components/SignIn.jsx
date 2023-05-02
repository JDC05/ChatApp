import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => (
  <div className="flex justify-center">
    <button
      onClick={googleSignIn}
      className="bg-green-500 text-white rounded-full px-6 py-3 font-bold hover:bg-green-700"
    >
      Sign In
    </button>
  </div>
);

export default SignIn;
