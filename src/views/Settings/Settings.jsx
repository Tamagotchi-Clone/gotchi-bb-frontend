import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditPet from '../../components/EditPet/EditPet';
import { useUser } from '../../context/UserContext';
import {
  deleteUserPet,
  getUserPetById,
  updateUserPet,
} from '../../services/userpets';

export default function Settings() {
  const [name, setName] = useState('');
  const { user, loading, setLoading } = useUser();
  const [pet, setPet] = useState({});
  const params = useParams();
  console.log(user);

  useEffect(() => {
    const fetchPet = async () => {
      const data = await getUserPetById(params.id);
      setPet(data);
      setLoading(false);
    };
    fetchPet();
  }, [loading]);

  if (loading) {
    return <h3>Loading</h3>;
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteUserPet(params.id);
    history.push(`/pets`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserPet(name);
      console.log(pet);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <EditPet
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        pet={pet}
        setPet={setPet}
      />
    </>
  );
}
