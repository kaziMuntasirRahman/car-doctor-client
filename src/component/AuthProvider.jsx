import PropTypes from 'prop-types';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../fireabase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  }, [])



  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
    
  }

  const logInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
  }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};


AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;