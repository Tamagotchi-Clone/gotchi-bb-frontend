import { useState } from 'react';
import { postUserPet } from '../../services/userpets';
import { useUser } from '../../context/UserContext';
import { getPetScoreByUserId, postPetScore } from '../../services/petscores';
import './PetList.css';

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
      try {
        await postUserPet({ userId: user.id, petId: chosenPet.id, name });
        await postPetScore({
          userId: user.id,
          hunger: 0,
          play: 0,
          cleanliness: 0,
        });
        const score = await getPetScoreByUserId(user.id);
        window.location.replace('/pet');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="chooseBox">
      <div className="choosepet-container">
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
        <div className="button-container">
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
        <p className="error-msg">{errorMsg}</p>
      </div>
    </div>
  );
}
