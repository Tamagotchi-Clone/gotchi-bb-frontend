import React from 'react';

export default function Petpage({
  pet,
  handleFeed,
  handlePlay,
  handleClean,
  isHungry,
  checkScore,
}) {
  return (
    <>
      <div>
        <h1>{pet.name}</h1>
        <h2>{isHungry}</h2>
      </div>
      <button onClick={handleFeed}>feed</button>
      <button onClick={handlePlay}>play</button>
      <button onClick={handleClean}>clean</button>
      <button onClick={checkScore}>score</button>
    </>
  );
}
