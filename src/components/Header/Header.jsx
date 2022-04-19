import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import usePet from '../../hooks/usePet';
import { signOut } from '../../services/users';
import './Header.css';

export default function Header() {
  const { user, setUser, loading } = useUser();
  const { pet } = usePet();
  const history = useHistory();

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    console.log('logout', user);
    history.push('/login');
  };
  if (loading) return <h1>loading..</h1>;
  return (
    <header>
      {loading == false && user ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/choosepet">Choose A Pet</Link>
          {/* <Link to={`/pet/${pet.id}`}>Your Pet</Link> */}
          <Link to="/profile">Settings</Link>
          {pet?.id ? (
            <Link to={`/pet/${pet.id}`}>Your pet</Link>
          ) : (
            <Link to="/choosepet">Choose a pet</Link>
          )}
          <button onClick={handleLogout}>logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </header>
  );
}
