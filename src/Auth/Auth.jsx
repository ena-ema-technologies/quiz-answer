import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from 'axios';


const auth = getAuth(app);
export const UserAuth = createContext(null);

const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                // const email= currentUser.email;
                axios.post("https://16-personality-server.vercel.app/jwt", {
                    email: currentUser.email
                }).then(data => {
                    // console.log(data.data.token);
                    localStorage.setItem("access-token", data.data.token)
                    setLoading(false)
                })
            } else {
                setLoading(false)
                localStorage.removeItem("access-token")
            }
        })
        return () => unsubscribe();
    }, [])

    const userInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleIn,
        logOut
    }
    return (
       <UserAuth.Provider value={userInfo}>
          {children}
       </UserAuth.Provider>
    );
};

export default Auth;