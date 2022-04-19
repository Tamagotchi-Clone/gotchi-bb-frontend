import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import usePet from '../../hooks/usePet';
import { getUserPetByUser } from '../../services/userpets';
import ChoosePet from '../ChoosePet/ChoosePet';

export default function Loading() {
  const [pets, setPets] = useState(null);
  const { user, loading, setLoading } = useUser();
  useEffect(() => {
    if (loading && user) {
      getUserPetByUser(user.id)
        .then((data) => setPets(data))
        .finally(() => setLoading(false));
    }
  }, [loading, user]);


  if (loading) return <h1>loading..</h1>;
  return (
    <div>
      {pets?.id ? (
        <>
          <h1>YOU HAVE A PET</h1>
          <Redirect to={`/pets/${pets.id}`} />
        </>
      ) : (
        <>
          <h1>you need a pet</h1>
          <ChoosePet />
        </>
      )}
    </div>
  );
}
