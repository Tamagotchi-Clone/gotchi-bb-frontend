import { useState, useEffect } from 'react';
import { getPetScores } from '../../services/petscores';
import FadeIn from 'react-fade-in/lib/FadeIn';
import './Leaderboard.css';

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPetScores();
      setScores(data);
    };
    fetchData();
  }, []);

  return (
    <FadeIn delay={30}>
      <div className="board">
        <h1>
          Users <b>Leaderboard</b>
        </h1>
        {scores.map((score) => (
          <div className="rows" key={score.id}>
            <p className="start">user: {score.user}</p>
            <p>pet: {score.pet}</p>
            <p>fed: {score.fed}</p>
            <p>cleaned: {score.cleaned}</p>
            <p>played with: {score.played}</p>
            <p>total happiness: {score.happiness}</p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
