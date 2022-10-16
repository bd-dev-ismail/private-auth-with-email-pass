import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const UseContext = ({children}) => {
    const [user, setUser] = useState({});

    //REgister with email & password
    const registerWithEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login With email & password
    const loginWithEmail = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //auth with useeffect
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            setUser(user);
            console.log(user);
        })
        return unsubscribe();
    },[])
    const authInfo = { user, registerWithEmail, loginWithEmail };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;