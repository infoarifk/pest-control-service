/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

const AuthContext = createContext(null);
export const useAuthContext = ()=> useContext(AuthContext);
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    

    //google Sign in
      const signInWithGoogle = async () => {
        
        try {
          await signInWithPopup(auth,provider);
        } catch (error) {
          console.error(error);
        }
      };

      //create user

      const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    

      //log in with email & pass
      const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };

      //sign out

      const logOut = ()=> {
        

        return signOut(auth);
    }


      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
          if (authUser) {
            setUser(authUser);
            
            console.log(authUser);
          } else {
            setUser(null);
          }
        });
    
        return () => unsubscribe();
      }, []);




    const values = {
        user,
        signInWithGoogle,
        logOut,
        signUpWithEmail,
        loginWithEmail
       
        
    
    
    };

    return (
        <AuthContext.Provider value ={values}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;