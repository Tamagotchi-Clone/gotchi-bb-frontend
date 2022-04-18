import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetPage from '../../components/Pet/PetPage';
import Bot from '../../components/Bot/Bot';
import {
  feedUserPet,
  cleanUserPet,
  playUserPet,
  getUserPetById,
} from '../../services/userpets';
import { hungerScore } from '../utils/scores';

export default function Pet() {
  const [pet, setPet] = useState({});
  const [hunger, setHunger] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log('params.id', params.id);

  useEffect(() => {
    const fetchPet = async () => {
      const data = await getUserPetById(params.id);
      setPet(data);
      setLoading(false);
    };
    fetchPet();
  }, [loading]);

  const handleFeed = async (e) => {
    e.preventDefault();
    try {
      await feedUserPet(params.id);
      console.log('hunger', pet.hunger);
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

  const checkScore = async () => {
    const score = await hungerScore(pet.hunger, params.id);
    console.log('score', score);
  };

  if (loading) return <h2>loading...</h2>;
  return (
    <>
      <PetPage
        pet={pet}
        handleFeed={handleFeed}
        handleClean={handleClean}
        handlePlay={handlePlay}
        setHunger={setHunger}
        hunger={hunger}
        checkScore={checkScore}
      />
      <Bot />
    </>
  );
}
