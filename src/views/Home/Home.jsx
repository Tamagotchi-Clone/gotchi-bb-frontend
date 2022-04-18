import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import usePet from '../../hooks/usePet';

export default function Home() {
  const { user, loading } = useUser();
  const { pet } = usePet();
  console.log(pet);
  if (loading) return <h1> loading ...</h1>;
  return (
    <div>
      {loading === false && user && pet ? (
        <Redirect to={`/pets/${pet.id}`} />
      ) : (
        <Redirect to="/choosepet" />
      )}
      {!user && <h1>Home</h1>}
    </div>
  );
}
