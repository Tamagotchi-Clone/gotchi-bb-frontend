export async function signIn({ username, password }) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (error) {
    throw new Error();
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
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (error) {
    throw new Error();
  }
}

export async function getCurrentUser() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });
    if (!res.ok) throw new Error();
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
}

export async function signOut() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
    });
    return res.ok;
  } catch (error) {
    console.log(error);
  }
}
