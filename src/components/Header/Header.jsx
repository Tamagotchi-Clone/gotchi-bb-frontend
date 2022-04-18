import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import usePet from '../../hooks/usePet';
import { signOut } from '../../services/users';

export default function Header() {
  const { user, setUser, loading } = useUser();
  const { pet } = usePet();
  const history = useHistory();
  console.log(user);
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
      {loading == false && user && pet ? (
        <div>
          <Link to="/">Home</Link>
          <Link to="/profile">Your Profile</Link>
          <Link to="/choosepet">Choose Your Pet</Link>
          <Link to={`/pet/${pet.id}`}>Hang Out With Your Pet</Link>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}
