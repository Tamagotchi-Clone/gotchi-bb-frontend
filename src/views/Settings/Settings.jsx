import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

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
    await deleteUserPet(pet.id);
    history.push(`/pets`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserPet(pet.id, name);
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
        name={name}
        setName={setName}
      />
    </>
  );
}
