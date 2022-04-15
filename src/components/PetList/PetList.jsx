import React from 'react';

export default function PetList({ pets }) {
  console.log('pets', pets);
  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <p>Name:{pet.species}</p>
          <img src={pet.image} alt={pet.species}></img>
        </div>
      ))}
    </div>
  );
}
