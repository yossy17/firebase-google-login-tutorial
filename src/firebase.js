import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDluRl8yxYbIz9lEnPMG4oOswgagXauSCk",
  authDomain: "fir-login-tutorial-15860.firebaseapp.com",
  projectId: "fir-login-tutorial-15860",
  storageBucket: "fir-login-tutorial-15860.appspot.com",
  messagingSenderId: "1047318632888",
  appId: "1:1047318632888:web:8dac54eee97bda3607174d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider };
