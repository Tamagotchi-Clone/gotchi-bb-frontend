import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { getUserPetByUser } from '../services/userpets';

export default function usePet() {
  const [pet, setPet] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (user?.username) {
      getUserPetByUser(user.id).then((data) => setPet(data));
    }
  }, [user]);

  return { pet, setPet };
}
