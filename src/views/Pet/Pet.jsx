import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetPage from '../../components/Pet/PetPage';
import {
  feedUserPet,
  cleanUserPet,
  playUserPet,
  getUserPetById,
} from '../../services/userpets';

export default function Pet() {
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const data = await getUserPetById(params.id);
      setPet(data);
      console.log('data', data);
      setLoading(false);
    };
    fetchPet();
  }, [loading]);

  const handleFeed = async (e) => {
    e.preventDefault();
    try {
      await feedUserPet(params.id);
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleClean = async (e) => {
    e.preventDefault();
    try {
      await cleanUserPet(params.id);
    } catch (error) {
      console.log('error', error);
    }
  };
  const handlePlay = async (e) => {
    e.preventDefault();
    try {
      await playUserPet(params.id);
    } catch (error) {
      console.log('error', error);
    }
  };

  if (loading) return <h2>loading...</h2>;
  return (
    <>
      <PetPage
        pet={pet}
        handleFeed={handleFeed}
        handleClean={handleClean}
        handlePlay={handlePlay}
      />
    </>
  );
}
