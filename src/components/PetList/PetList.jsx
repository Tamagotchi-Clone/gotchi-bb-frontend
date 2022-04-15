import React from 'react';

export default function PetList({ pets }) {
  return (
    <div>
      {pets.results.map((pet) => (
        <div>
          <p>Name:{pet.species}</p>
          <img src={pet.image} alt={pet.species}></img>
        </div>
      ))}
    </div>
  );
}
