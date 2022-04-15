import React from 'react';
import Pet from '../../views/Pet/Pet';

export default function Petpage({ pet }) {
  return (
    <>
      <div>
        <h1>{pet.name}</h1>
      </div>
      <button>feed</button>
      <button>play</button>
      <button>clean</button>
    </>
  );
}
