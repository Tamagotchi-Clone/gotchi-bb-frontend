import React, { useState } from 'react';
import { postUserPet } from '../../services/userpets';
import './PetList.css';
//import { useUser } from '../../context/userContext';

export default function PetList({ pets, setChosenPet }) {
  // const { setUser } = useUser();
  const [name, setName] = useState('');

  async function handleChoosePet() {
    try {
      await postUserPet(chosenPet, user_id);
    } catch {
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
      <button onClick={handleChoosePet}>Submit</button>
    </div>
  );
}
