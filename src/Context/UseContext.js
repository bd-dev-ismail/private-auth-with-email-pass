import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const UseContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    //REgister with email & password
    const registerWithEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login With email & password
    const loginWithEmail = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //LogOout
    const logOut = ()=>{
        return signOut(auth)
    }
    //auth with useeffect
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (userr) =>{
            setUser(userr);
            setLoading(false)
            console.log(userr);
        })
        return ()=>{
            unsubscribe();
        } 
            
    },[user])
    const authInfo = {
      setUser,
      loading,
      user,
      registerWithEmail,
      loginWithEmail,
      logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;