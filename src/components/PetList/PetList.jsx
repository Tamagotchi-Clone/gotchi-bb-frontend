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
    <>
      <div className="choosepet-div">
        {pets.map((pet) => (
          <div className="pets" key={pet.id}>
            <p>Species: {pet.species}</p>
            <label>
              <input
                type="radio"
                name="pet"
                onClick={() => setChosenPet(pet)}
              />
              <img className="pet-img" src={pet.image} alt={pet.species}></img>
            </label>
          </div>
        ))}
      </div>
      <div className="buttondiv">
        <input
          className="name-input"
          type="text"
          placeholder="name your pet"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <button className="choosepet-button" onClick={handleChoosePet}>
          Submit
        </button>
      </div>
    </>
  );
}
