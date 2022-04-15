import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { getCurrentUser } from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getCurrentUser().then((user) => setUser(user));
  }, []);

  const contextValue = { user, setUser };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('error, needs user provider');
  }
  return context;
};
