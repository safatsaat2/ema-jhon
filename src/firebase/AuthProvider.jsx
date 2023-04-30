import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

 const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);
    const [loader, setLoader] = useState(true);
    const createAccount = (email, password)=> {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser  =>{
            setUser(currentUser);
            setLoader(false)
        }
        );
        return () =>{
            return unsubscribe()
        }
    },[])

        const AuthInfo ={
            user,
            loader,
            createAccount,
            signIn,
            logOut
        }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;