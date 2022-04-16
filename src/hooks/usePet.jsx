import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { getUserPetByUser } from '../services/userpets';

export default function usePet() {
  const [pet, setPet] = useState({});
  const { user } = useUser();

  useEffect(() => {
    console.log('usepet', user);
    if (user?.username) {
      getUserPetByUser(user.id).then((data) => setPet(data));
    }
  }, [user]);

  console.log('pet', pet);
  return { pet, setPet };
}
