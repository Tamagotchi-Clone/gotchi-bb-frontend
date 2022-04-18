export async function signIn({ username, password }) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ username, password }),
    });
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log('error sign in', error);
  }
}

export async function signUp({ username, password }) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ username, password }),
    });
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
}

export async function getCurrentUser() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });
    if (!res.ok) throw new Error('error no user');
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log('ERROR', error);
  }
}

export async function signOut() {
  const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
  });

  return res.ok;
}
