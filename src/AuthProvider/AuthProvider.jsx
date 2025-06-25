import React, {useEffect, useState, createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebse.confic.js"; // Make sure file name is spelled correctly


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
const [loading,setLoading]=useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
// obserber
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      
    });
    return ()=>{
      unsubscribe()
    }; // Correctly return the unsubscribe function
  }, []);
  const logOut=()=>{
    return signOut(auth)
  }
const signIn=(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
