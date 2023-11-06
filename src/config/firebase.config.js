
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBcmMmVPtICJ3rwom7IMj8sDYtlYy_FXsA",
  authDomain: "paste-control-web-app.firebaseapp.com",
  projectId: "paste-control-web-app",
  storageBucket: "paste-control-web-app.appspot.com",
  messagingSenderId: "322199832567",
  appId: "1:322199832567:web:895f0f767dd75e573a10f2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);