import React from 'react';

export default function Petpage({ pet, handleFeed, handlePlay, handleClean }) {
  console.log('pet', pet);
  return (
    <>
      <div>
        <h1>{pet.name}</h1>
        <img src={pet.petId.image} />
      </div>
      <button onClick={handleFeed}>feed</button>
      <button onClick={handlePlay}>play</button>
      <button onClick={handleClean}>clean</button>
    </>
  );
}
