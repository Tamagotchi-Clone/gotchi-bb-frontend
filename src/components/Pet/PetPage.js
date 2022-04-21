import React from 'react';
import Bot from '../Bot/Bot';
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
    <>
      <div className="petBox">
        <h1>{pet.name}</h1>
        <div className="petScreen">
          <Bot />
          <img src={pet.image} />
          <div className="petStats">
            <div className="stat-container">
              <img src="https://i.postimg.cc/Zv8mtdL7/status-bar.png" />
              <p>hunger</p>
            </div>
            <div className="stat-container">
              <img src="https://i.postimg.cc/VJdC1f39/status3.png" />
              <p> hygiene</p>
            </div>
            <div className="stat-container">
              <img src="https://i.postimg.cc/MvsQhMrK/status2.png" />
              <p>amusement</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleFeed}>Feed</button>
          <button onClick={handleClean}>Clean</button>
          <button onClick={handlePlay}>Play</button>
        </div>
      </div>
    </>
  );
}
