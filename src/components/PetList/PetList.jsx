import React, { useState } from 'react';
import { postUserPet } from '../../services/userpets';
import './PetList.css';
import { useUser } from '../../context/UserContext';

export default function PetList({
  pets,
  setChosenPet,
  chosenPet,
  name,
  setName,
}) {
  const { user } = useUser();

  async function handleChoosePet() {
    console.log('click');
    try {
      await postUserPet({ userId: user.id, petId: chosenPet.id, name });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <p>Name:{pet.species}</p>
          <label>
            <input type="radio" name="pet" onClick={() => setChosenPet(pet)} />
            <img src={pet.image} alt={pet.species}></img>
          </label>
        </div>
      ))}
      <input
        type="text"
        placeholder="name your pet"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <button onClick={handleChoosePet}>Submit</button>
    </div>
  );
}
