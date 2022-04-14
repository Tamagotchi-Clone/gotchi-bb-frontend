
import { useContext } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = currentUser();
  const [user, setUser] = useState(
    currentUser
      ? {
          id: currentUser.id,
          email: currentUser.email,
        }
      : {}
  );

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