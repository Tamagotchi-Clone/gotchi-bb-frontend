export const signIn = async ({ email, username }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ email, username }),
    });
  } catch (error) {
    return null;
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });
    return res.json();
  } catch (error) {
    return null;
  }
};

export const signOut = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
  });

  return res.ok;
};
