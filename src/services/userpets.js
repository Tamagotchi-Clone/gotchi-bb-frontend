export const getUserPets = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/userpets`);
  return res.json();
};

export const postUserPets = async ({ pet_id, user_id, name }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ pet_id, user_id, name }),
    });
    return res.json();
  } catch (error) {
    return null;
  }
};

export const updateUserPet = async ({ pet_id, user_id, name }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ pet_id, user_id, name }),
    });
    return res.json();
  } catch (error) {
    return null;
  }
};

export const deleteUserPet = async ({ pet_id, user_id, name }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ pet_id, user_id, name }),
    });
    return res.json();
  } catch (error) {
    return null;
  }
};
