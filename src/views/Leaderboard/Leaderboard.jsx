import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getPetScores } from '../../services/petscores';
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
    <div className="board">
      <h1>Users Leaderboard</h1>
      {scores.map((score) => (
        <div className="rows">
          <p className="start">user: {score.user}</p>
          <p>pet: {score.pet}</p>
          <p>fed: {score.fed}</p>
          <p>cleaned: {score.cleaned}</p>
          <p>played with: {score.played}</p>
          <p>total happiness: {score.happiness}</p>
        </div>
      ))}
    </div>
  );
}
