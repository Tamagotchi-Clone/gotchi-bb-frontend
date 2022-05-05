import { useEffect, useState } from 'react';
import { getPets } from '../../services/pets';
import PetList from '../../components/PetList/PetList';
import FadeIn from 'react-fade-in/lib/FadeIn';
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

  if (loading) return <span className="loader"></span>;

  return (
    <FadeIn delay={30}>
      <div className="choosePetBox">
        <h1>
          Choose Your <b>bb</b>
        </h1>
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
    </FadeIn>
  );
}
