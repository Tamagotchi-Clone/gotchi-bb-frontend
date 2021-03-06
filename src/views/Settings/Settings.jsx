import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditPet from '../../components/EditPet/EditPet';
import { useUser } from '../../context/UserContext';
import { deleteUserScore, getPetScoreByUserId } from '../../services/petscores';
import {
  deleteUserPet,
  getUserPetById,
  updateUserPet,
} from '../../services/userpets';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Settings() {
  const [name, setName] = useState('');
  const { user, loading, setLoading } = useUser();
  const [pet, setPet] = useState({});
  const params = useParams();

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
    if (confirm('Are you sure you want to delete your bb?')) {
      await deleteUserPet(pet.id);
      await getPetScoreByUserId(user.id);
      await deleteUserScore(user.id);
      window.location.replace('/choosepet');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name === '') {
        alert('Please type in a new name to change.');
      } else {
        await updateUserPet(pet.id, name);
        window.location.replace(`/pet/${pet.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FadeIn delay={30}>
      <EditPet
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        pet={pet}
        setPet={setPet}
        name={name}
        setName={setName}
      />
    </FadeIn>
  );
}
