export const getPetScores = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/scores`);
  return await res.json();
};

export const postPetScore = async ({
  hunger,
  play,
  cleanliness,
  user_id,
  id,
}) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/pet-scores/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ hunger, play, cleanliness, user_id }),
    });
    return await res.json();
  } catch (error) {
    return null;
  }
};

export const updatePetScore = async ({
  hunger,
  play,
  cleanliness,
  user_id,
  id,
}) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/pet-scores/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ hunger, play, cleanliness, user_id }),
    });
    return await res.json();
  } catch (error) {
    return null;
  }
};
