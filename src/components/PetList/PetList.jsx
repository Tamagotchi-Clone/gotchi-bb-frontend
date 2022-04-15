import React from 'react';
import './PetList.css';

export default function PetList({ pets }) {
  console.log('pets', pets);
  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <p>Name:{pet.species}</p>
          <label>
            <input type="radio" name="pet" />
            <img src={pet.image} alt={pet.species}></img>
          </label>
        </div>
      ))}
    </div>
  );
}
