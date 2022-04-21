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
    history.push('/login');
  };
  if (loading) return <h1>loading..</h1>;
  return (
    <header>
      <div>
        <h1>
          <Link className="logo" to="/">
            gotchi bb
            <img src="https://i.postimg.cc/QFRxTtc8/pet4.png" />
          </Link>
        </h1>
      </div>
      <div className="header">
        {loading == false && user ? (
          <>
            <Link to="/leaderboard">Leaderboard</Link>
            {pet?.id ? (
              <>
                <Link to={`/pet/${pet.id}`}>Your bb</Link>
                <Link to={`/pet/${pet.id}/edit`}>Settings</Link>
              </>
            ) : (
              <Link to="/choosepet">Choose A Pet</Link>
            )}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </>
        )}
      </div>
    </header>
  );
}
