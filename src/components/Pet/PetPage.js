import React from 'react';

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
      <div>
        <h1>{pet.name}</h1>
        <p>{hunger}</p>
        <p>{clean}</p>
        <p>{play}</p>
        <img src={pet.image} />
      </div>
      <button onClick={handleFeed}>feed</button>
      <button onClick={handlePlay}>play</button>
      <button onClick={handleClean}>clean</button>
    </>
  );
}
