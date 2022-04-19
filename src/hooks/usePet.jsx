import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUser } from '../context/UserrContext';
import { getUserPetByUser } from '../services/userpets';

export default function usePet() {
  const [pet, setPet] = useState(null);
  const { user, loading } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (loading == false && user) {
        const data = await getUserPetByUser(user.id);
        setPet(data);
      }
    };
    fetchData();
  }, [loading, user]);

  return { pet, loading, setPet };
}
