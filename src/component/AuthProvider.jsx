import PropTypes from 'prop-types';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../fireabase/firebase.config";
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  }, [])


  useEffect(()=>{
    axios.get('http://localhost:8000/services')
    .then(data=>data.data)
    .then(data=>setServices(data));
  }, []);


  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password); 
  }

  const logInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  const logOutUser = ()=>{
    setLoading(true);
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    services,
    createUser,
    logInUser,
    logOutUser,
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