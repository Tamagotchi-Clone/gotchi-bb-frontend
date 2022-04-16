import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import { signOut } from '../../services/users';

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();
  const handleLogout = async () => {
    await signOut();
    setUser({});
    console.log('logout', user);
    history.push('/login');
  };
  return (
    <div>
      Header
      {user.username || user.user ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}
