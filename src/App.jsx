import { useState } from "react";
import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  const [count, setCount] = useState(0);

  const handleAuthGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <button onClick={handleAuthGoogle}>Add google</button>
    </>
  );
}

export default App;
