import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { getUserPetByUser } from '../../services/userpets';
import usePet from '../../hooks/usePet';
import ChoosePet from '../ChoosePet/ChoosePet';

export default function PetLoading() {
  const { pet, setPet } = usePet();
  const { user, loading, setLoading } = useUser();
  useEffect(() => {
    if (loading && user) {
      getUserPetByUser(user.id)
        .then((data) => setPet(data))
        .finally(() => setLoading(false));
    }
  }, [loading, user]);

  if (loading) return <span className="loader"></span>;
  return (
    <div>
      {!loading && pet?.id ? (
        <>
          <h1>Taking you to pet page...</h1>
          <Redirect to={`/pet/${pet.id}`} />
        </>
      ) : (
        <>
          <h1></h1>
          <ChoosePet />
        </>
      )}
    </div>
  );
}
