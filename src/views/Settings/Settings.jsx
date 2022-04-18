// displays username
//displays pet you have selected using your user id
//ability to delete your pet and be rerouted to the choose a pet page
//ability to edit pets name
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
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
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

  const handleEdit = async () => {
    try {
      await updateUserPet(name, params.id);
      setIsEditing(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserPet(name);
      history.push(`/pets/${params.id}`);
    } catch {
      setMessage('Error');
    }
  };

  return (
    <>
      <EditPet
        handleSubmit={handleSubmit}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        pet={pet}
        setPet={setPet}
      />
    </>
  );
}
