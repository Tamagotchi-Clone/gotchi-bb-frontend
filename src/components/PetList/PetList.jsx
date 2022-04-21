import React, { useState } from 'react';
import { postUserPet } from '../../services/userpets';
import './PetList.css';
import { useUser } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import {
  getPetScoreByUserId,
  getPetScores,
  postPetScore,
} from '../../services/petscores';

export default function PetList({
  pets,
  setChosenPet,
  chosenPet,
  name,
  setName,
}) {
  const { user } = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  async function handleChoosePet() {
    if (name === '') {
      setErrorMsg('Please type in a name.');
    } else {
      console.log('click');
      try {
        await postUserPet({ userId: user.id, petId: chosenPet.id, name });
        await postPetScore({
          userId: user.id,
          hunger: 0,
          play: 0,
          cleanliness: 0,
        });
        const score = await getPetScoreByUserId(user.id);
        console.log('score', score);
        window.location.replace('/pet');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="chooseBox">
      <div className="choosepet-div">
        {pets.map((pet) => (
          <div className="pets" key={pet.id}>
            <label>
              <input
                type="radio"
                name="pet"
                onClick={() => setChosenPet(pet)}
              ></input>
              <img className="pet-img" src={pet.image} alt={pet.species} />
              <p>{pet.species}</p>
            </label>
          </div>
        ))}
      </div>
      <div className="buttondiv">
        <input
          aria-label="petnameinput"
          className="name-input"
          type="text"
          placeholder="Pet Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <button className="choosepet-button" onClick={handleChoosePet}>
          Make Pet!
        </button>
      </div>
      <p className="errorMsg">{errorMsg}</p>
    </div>
  );
}
