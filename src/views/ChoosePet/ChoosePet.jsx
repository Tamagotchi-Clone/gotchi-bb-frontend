//maps through all hard coded pets and displays them on page
//pet images are radio buttons and when you click on one it selects
//input for their name
//when you press submit button it updates table so you have a new pet id, a new pet name, and it is attached to your user id

import React, { useEffect, useState } from 'react';
import { getPets } from '../../services/pets';
import PetList from '../../components/PetList/PetList';

export default function ChoosePet() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenPet, setChosenPet] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPets();
      console.log('data', data);
      setPets(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>Choose Your Pet!</h1>
      <PetList
        chosenPet={chosenPet}
        setChosenPet={setChosenPet}
        pets={pets}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}
