/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

const AuthContext = createContext(null);
export const useAuthContext = ()=> useContext(AuthContext);
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    

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

      const signInWithGoogle = async () => {
        
        try {
          await signInWithPopup(auth,provider);
        } catch (error) {
          console.error(error);
        }
      };



    const values = {
        user,
        signInWithGoogle
        
    
    
    };

    return (
        <AuthContext.Provider value ={values}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;