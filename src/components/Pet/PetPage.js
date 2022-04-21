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
}) {
  return (
    <>
      <div className="petBox">
        <h1>{pet.name}</h1>
        <div className="petScreen">
          {/* <Bot /> */}
          <img src={pet.image} />
          <div className="petStats">
            <div className="stat-container">
              {hunger}
              <p>hunger</p>
            </div>
            <div className="stat-container">
              {clean}
              <p> hygiene</p>
            </div>
            <div className="stat-container">
              {play}
              <p>amusement</p>
            </div>
          </div>
        </div>
        <div className="msg-container">
          {' '}
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
