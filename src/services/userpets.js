export const getUserPets = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getUserPetById = async (id) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getUserPetByUser = async (userId) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/users/${userId}`,
      {
        credentials: 'include',
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const postUserPet = async ({ petId, name }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ petId, name }),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateUserPet = async (id, name) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`, {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name }),
      credentials: 'include',
      mode: 'cors',
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const feedUserPet = async (id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${id}/hunger`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const cleanUserPet = async (id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${id}/clean`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const playUserPet = async (id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${id}/play`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserPet = async (petId) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${petId}`, {
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
