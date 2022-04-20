import React, { useEffect, useState } from 'react';
import { getPets } from '../../services/pets';
import PetList from '../../components/PetList/PetList';
import './ChoosePet.css';

export default function ChoosePet() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenPet, setChosenPet] = useState({});
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPets();
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
        name={name}
        setName={setName}
      />
    </div>
  );
}
