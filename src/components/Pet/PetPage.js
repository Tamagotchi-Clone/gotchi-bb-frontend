import React from 'react';

export default function Petpage({ pet, handleFeed, handlePlay, handleClean }) {
  return (
    <>
      <div>
        <h1>{pet.name}</h1>
      </div>
      <button onClick={handleFeed}>feed</button>
      <button onClick={handlePlay}>play</button>
      <button onClick={handleClean}>clean</button>
    </>
  );
}
