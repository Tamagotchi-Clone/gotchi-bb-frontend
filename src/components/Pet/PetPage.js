import React from 'react';
import './PetPage.css';

export default function Petpage({
  pet,
  handleFeed,
  handlePlay,
  handleClean,
  hunger,
  clean,
  play,
}) {
  return (
    <div className="egg">
      <div className="petBox">
        <h1>{pet.name}</h1>
        <img src={pet.image} />
        <div className="petStats">
          <p>{hunger}</p>
          <p>{clean}</p>
          <p>{play}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleFeed}>Feed</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleClean}>Clean</button>
      </div>
    </div>
  );
}
