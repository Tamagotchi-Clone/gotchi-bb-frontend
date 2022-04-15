import { useState, useEffect } from 'react';
import PetPage from '../../components/Pet/PetPage';
import { getUserPetById } from '../../services/userpets';

export default function Pet() {
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async (id) => {
      const data = await getUserPetById(id);
      setPet(data);
      setLoading(false);
    };
    fetchPet();
  }, []);

  if (loading) return <h2>loading...</h2>;
  return (
    <>
      <h1>pet page</h1>
      <PetPage pet={pet} />
    </>
  );
}
