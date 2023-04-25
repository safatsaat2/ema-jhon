import React, { createContext } from 'react';
import app from './firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null)

 const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const user = {displayName:"Potash"}
    const createAccount = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

        const AuthInfo ={
            user,
            createAccount
        }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;