import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetPage from '../../components/Pet/PetPage';
import Bot from '../../components/Bot/Bot';
import {
  feedUserPet,
  cleanUserPet,
  playUserPet,
  getUserPetByUser,
  getUserPetById,
} from '../../services/userpets';
import { calculateHappiness, happinessScore } from '../utils/needs';

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
      const hungerScore = calculateHappiness(hunger);
      console.log('hungerScore', hungerScore);

      const clean = await happinessScore(pet.cleanliness, params.id);
      const cleanScore = calculateHappiness(clean);
      console.log('cleanScore', cleanScore);

      const play = await happinessScore(pet.play, params.id);
      const playScore = calculateHappiness(play);
      console.log('playScore', playScore);

      setPet(data);

      if (hungerScore === true) {
        setHunger('hungry');
      } else {
        setHunger('not hungry');
      }

      if (cleanScore === true) {
        setClean('dirty');
      } else {
        setClean('clean');
      }

      if (playScore === true) {
        setPlay('bored');
      } else {
        setPlay('happy');
      }

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
        hunger={hunger}
        play={play}
        clean={clean}
      />
      {/* <Bot /> */}
    </>
  );
}
