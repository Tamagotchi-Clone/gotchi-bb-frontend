import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetPage from '../../components/Pet/PetPage';
import { getUserPetById } from '../../services/userpets';

export default function Pet() {
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchPet = async (id) => {
      const data = await getUserPetById(params.id);
      setPet(data);
      console.log('data', data);
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
