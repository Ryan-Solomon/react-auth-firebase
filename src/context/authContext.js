import React from 'react';
import { auth } from '../firebase';

const AuthContext = React.useContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState();

  const signup = (email, password) => {
    return auth.createUser(email, password);
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};
