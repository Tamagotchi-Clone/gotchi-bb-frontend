// displays username
//displays pet you have selected using your user id
//ability to delete your pet and be rerouted to the choose a pet page
//ability to edit pets name
import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import {
  deleteUserPet,
  getUserPetById,
  updateUserPet,
} from '../../services/userpets';

export default function Profile() {
  const [pet, setPet] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { user, loading, setLoading } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserPetById(user.id);
      setPost(data);
      setLoading(false);
    };
    fetchData();
  }, [user.id]);

  if (loading) {
    return <h3>Loading</h3>;
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteUserPet(pet.id);
    history.push(`/pets`);
  };

  const handleEdit = async () => {
    try {
      await updateUserPet(pet.id);
      setIsEditing(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <h1> Your Pet:</h1>
      <h3>{pet.pet}</h3>
      <button onClick={handleDelete}>Delete Pet</button>
      <button onClick={handleEdit}>Edit Pet</button>
    </>
  );
}
