import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import { signOut } from '../../services/users';

export default function Header() {
  const { user, setUser, loading } = useUser();
  const history = useHistory();
  console.log('USER', user);
  //   console.log('USER.USER', user.user);
  const handleLogout = async () => {
    await signOut();
    setUser(null);
    console.log('logout', user);
    history.push('/login');
  };

  if (loading) return <h1>loading..</h1>;
  return (
    <div>
      Header
      {loading === false && user?.username ? (
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
