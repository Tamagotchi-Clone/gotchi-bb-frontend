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
import { calculateNeeds, happinessScore } from '../utils/needs';

export default function Pet() {
  const [pet, setPet] = useState({});
  const [hunger, setHunger] = useState('');
  const [play, setPlay] = useState('');
  const [clean, setClean] = useState('');
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const data = await getUserPetById(params.id);

      const hunger = await happinessScore(pet.hunger, params.id);
      const hungerScore = calculateNeeds(hunger);
      console.log('hungerScore', hungerScore);

      const clean = await happinessScore(pet.cleanliness, params.id);
      const cleanScore = calculateNeeds(clean);
      console.log('cleanScore', cleanScore);

      const play = await happinessScore(pet.play, params.id);
      const playScore = calculateNeeds(play);
      console.log('playScore', playScore);

      setPet(data);
      setHunger(hungerScore);
      setClean(cleanScore);
      setPlay(playScore);
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

  if (loading) return <h2>loading...</h2>;
  return (
    <>
      <PetPage
        pet={pet}
        handleFeed={handleFeed}
        handleClean={handleClean}
        handlePlay={handlePlay}
      />
      <Bot />
    </>
  );
}
