import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import usePet from '../../hooks/usePet';
import { getUserPetByUser } from '../../services/userpets';

export default function Loading() {
  const [pets, setPets] = useState({});
  const { user, loading } = useUser();
  useEffect(() => {
    if (!loading && user) {
      const fetchData = async () => {
        const data = await getUserPetByUser(user.id);
        setPets(data);
      };
      fetchData();
    }
  }, [loading, user]);
  if (pets?.id) {
    console.log('pet exists');
  } else {
    console.log('no exists');
  }
  if (loading) return <h1>loading..</h1>;
  return <div>hi</div>;
}
