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
    <>
      <div className="petBox">
        <h1>{pet.name}</h1>
        <div className="petScreen">
          <img src={pet.image} />
          <hr />
        </div>
        <div className="petStats">
          <div className="stat-container">
            <img src="https://i.postimg.cc/Zv8mtdL7/status-bar.png" />
            hunger
            {/* <button onClick={handleFeed}>Feed</button> */}
          </div>
          <div className="stat-container">
            <img src="https://i.postimg.cc/VJdC1f39/status3.png" />
            hygiene
            {/* <button onClick={handleClean}>Clean</button> */}
          </div>
          <div className="stat-container">
            <img src="https://i.postimg.cc/MvsQhMrK/status2.png" />
            entertainment
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleFeed}>Feed</button>
        <button onClick={handleClean}>Clean</button>
        <button onClick={handlePlay}>Play</button>
      </div>
    </>
  );
}
