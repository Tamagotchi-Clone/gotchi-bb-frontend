import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetPage from '../../components/Pet/PetPage';
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
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Pet() {
  const [pet, setPet] = useState({});
  const [hunger, setHunger] = useState('');
  const [play, setPlay] = useState('');
  const [clean, setClean] = useState('');
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState({});
  const [msg, setMsg] = useState('');
  const [isActive, setActive] = useState(false);
  const params = useParams();
  const { user } = useUser();
  const happy = 'https://iili.io/VeGj8g.png';
  const satisfied = 'https://iili.io/VeGhcF.png';
  const unhappy = 'https://iili.io/VeGN9a.png';
  const miserable = 'https://iili.io/VeGXF1.png';

  useEffect(() => {
    const fetchPet = async () => {
      const data = await getUserPetById(params.id);

      const hunger = await happinessScore(pet.hunger, params.id);
      const hungerScore = await calculateHappiness(hunger);

      const clean = await happinessScore(pet.cleanliness, params.id);
      const cleanScore = await calculateHappiness(clean);

      const play = await happinessScore(pet.play, params.id);
      const playScore = await calculateHappiness(play);

      setPet(data);

      if (hungerScore === 'miserable') {
        setHunger(miserable);
      } else if (hungerScore === 'unhappy') {
        setHunger(unhappy);
      } else if (hungerScore === 'satisfied') {
        setHunger(satisfied);
      } else if (hungerScore === 'happy') {
        setHunger(happy);
      }

      if (playScore === 'miserable') {
        setPlay(miserable);
      } else if (playScore === 'unhappy') {
        setPlay(unhappy);
      } else if (playScore === 'satisfied') {
        setPlay(satisfied);
      } else {
        setPlay(happy);
      }

      if (cleanScore === 'miserable') {
        setClean(miserable);
      } else if (cleanScore === 'unhappy') {
        setClean(unhappy);
      } else if (cleanScore === 'satisfied') {
        setClean(satisfied);
      } else {
        setClean(happy);
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
      setActive(!isActive);
      if (hunger === miserable || hunger === unhappy || hunger === satisfied) {
        await updatePetScore(
          user.id,
          score.hunger + 1,
          score.cleanliness,
          score.play
        );
        setHunger(happy);
      } else {
        setMsg(`${pet.name} is not hungry yet!`);
        setTimeout(() => {
          setMsg('');
        }, 5000);
      }
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
      setActive(!isActive);
      if (clean === miserable || clean === unhappy || clean === satisfied) {
        await updatePetScore(
          user.id,
          score.hunger,
          score.cleanliness + 1,
          score.play
        );
        setClean(happy);
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
      setActive(!isActive);
      if (play === miserable || play === unhappy || play === satisfied) {
        await updatePetScore(
          user.id,
          score.hunger,
          score.cleanliness,
          score.play + 1
        );
        setPlay(happy);
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

  if (loading) return <span className="loader"></span>;
  return (
    <FadeIn delay={30}>
      <PetPage
        pet={pet}
        handleFeed={handleFeed}
        handleClean={handleClean}
        handlePlay={handlePlay}
        hunger={hunger}
        play={play}
        clean={clean}
        msg={msg}
        isActive={isActive}
      />
    </FadeIn>
  );
}
