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
import { calculateHappiness, happinessScore } from '../utils/needs';
import { getPetScoreByUserId, updatePetScore } from '../../services/petscores';
import { useUser } from '../../context/UserContext';
import '../../components/Pet/PetPage.css';

export default function Pet() {
  const [pet, setPet] = useState({});
  const [hunger, setHunger] = useState('');
  const [play, setPlay] = useState('');
  const [clean, setClean] = useState('');
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { user } = useUser();
  const [score, setScore] = useState({});
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchPet = async () => {
      const data = await getUserPetById(params.id);

      const hunger = await happinessScore(pet.hunger, params.id);
      const hungerScore = await calculateHappiness(hunger);
      console.log('hungerScore', hungerScore);

      const clean = await happinessScore(pet.cleanliness, params.id);
      const cleanScore = await calculateHappiness(clean);
      console.log('cleanScore', cleanScore);

      const play = await happinessScore(pet.play, params.id);
      const playScore = await calculateHappiness(play);
      console.log('playScore', playScore);

      setPet(data);

      if (hungerScore === 'miserable') {
        setHunger('https://i.ibb.co/5cf7FvT/status3.png');
      } else if (hungerScore === 'unhappy') {
        setHunger('https://i.ibb.co/r2Q6gXS/status2.png');
        setStatusBar('1');
      } else if (hungerScore === 'satisfied') {
        setHunger('https://i.ibb.co/1913vcW/status1.png');
      } else {
        setHunger('https://i.ibb.co/vdXWNyF/status.png');
      }

      if (playScore === 'https://i.ibb.co/5cf7FvT/status3.png') {
        setPlay('miserable');
      } else if (playScore === 'unhappy') {
        setPlay('https://i.ibb.co/r2Q6gXS/status2.png');
      } else if (playScore === 'satisfied') {
        setPlay('https://i.ibb.co/1913vcW/status1.png');
      } else {
        setPlay('https://i.ibb.co/vdXWNyF/status.png');
      }

      if (cleanScore === 'miserable') {
        setClean('https://i.ibb.co/5cf7FvT/status3.png');
      } else if (cleanScore === 'unhappy') {
        setClean('https://i.ibb.co/r2Q6gXS/status2.png');
      } else if (cleanScore === 'satisfied') {
        setClean('https://i.ibb.co/1913vcW/status1.png');
      } else {
        setClean('https://i.ibb.co/vdXWNyF/status.png');
      }

      setLoading(false);
    };
    fetchPet();
  }, [loading]);

  const handleFeed = async (e) => {
    e.preventDefault();
    try {
      await feedUserPet(params.id);
      const score = await getPetScoreByUserId(user.id);
      setScore(score);
      setHunger('happy');
      if (
        hunger === 'miserable' ||
        hunger === 'unhappy' ||
        hunger === 'satisfied'
      ) {
        await updatePetScore(
          user.id,
          score.hunger + 1,
          score.cleanliness,
          score.play
        );
      } else {
        setMsg(`${pet.name} is not hungry yet!`);
        setTimeout(() => {
          setMsg('');
        }, 5000);
      }
      console.log('hunger', pet.hunger);
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleClean = async (e) => {
    e.preventDefault();
    try {
      await cleanUserPet(params.id);
      const score = await getPetScoreByUserId(user.id);
      setScore(score);
      setClean('happy');
      if (
        clean === 'miserable' ||
        clean === 'unhappy' ||
        clean === 'satisfied'
      ) {
        await updatePetScore(
          user.id,
          score.hunger,
          score.cleanliness + 1,
          score.play
        );
      } else {
        setMsg(`${pet.name} is not dirty yet!`);
        setTimeout(() => {
          setMsg('');
        }, 5000);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  const handlePlay = async (e) => {
    e.preventDefault();
    try {
      await playUserPet(params.id);
      const score = await getPetScoreByUserId(user.id);
      setScore(score);
      setPlay('happy');
      if (play === 'miserable' || play === 'unhappy' || play === 'satisfied') {
        await updatePetScore(
          user.id,
          score.hunger,
          score.cleanliness + 1,
          score.play
        );
      } else {
        setMsg(`${pet.name} is not bored!`);
        setTimeout(() => {
          setMsg('');
        }, 5000);
      }
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
        msg={msg}
      />
    </>
  );
}
