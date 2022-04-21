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
  msg,
  isActive,
}) {
  return (
    <>
      <div className="petBox">
        <h1>{pet.name}</h1>
        <div className="petScreen">
          <Bot />
          <img src={pet.image} className={isActive ? 'wobble' : null} />
          <div className="petStats">
            <div className="stat-container">
              <img src={hunger} />
              <p>hunger</p>
            </div>
            <div className="stat-container">
              <img src={clean} />
              <p> hygiene</p>
            </div>
            <div className="stat-container">
              <img src={play} />
              <p>amusement</p>
            </div>
          </div>
        </div>
        <div className="msg-container">
          {msg ? <p className="msg">{msg}</p> : ''}
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
