export const getPetScores = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/scores`);
  return await res.json();
};

export const postPetScore = async ({ userId, hunger, play, cleanliness }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/scores`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ userId, hunger, play, cleanliness }),
    });
    return await res.json();
  } catch (error) {
    return null;
  }
};

export const getPetScoreByUserId = async (userId) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/scores/${userId}`, {
      credentials: 'include',
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updatePetScore = async (userId, hunger, play, cleanliness) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/scores/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ userId, hunger, play, cleanliness }),
    });
    return await res.json();
  } catch (error) {
    return null;
  }
};

export const deleteUserScore = async (userId) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/scores/${userId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
