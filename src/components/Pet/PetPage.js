import React from 'react';

export default function Petpage({ pet, handleFeed }) {
  return (
    <>
      <div>
        <h1>{pet.name}</h1>
      </div>
      <button onClick={handleFeed}>feed</button>
      <button>play</button>
      <button>clean</button>
    </>
  );
}
