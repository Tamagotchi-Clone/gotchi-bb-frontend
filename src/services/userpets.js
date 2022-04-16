export const getUserPets = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets`);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
};

export const getUserPetById = async (id) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
};

export const getUserPetByUser = async (user_id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${user_id}`,
      {
        credentials: 'include',
      }
    );
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
};

export const postUserPet = async ({ pet_id, user_id, name }) => {
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

export const feedUserPet = async (id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${id}/hunger`,
      {
        method: 'PATCH',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
        body: id,
      }
    );
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log('ERROR:', error);
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
