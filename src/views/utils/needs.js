export async function happinessScore(date) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/difference`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ date }),
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function calculateHappiness(need) {
  if (need.difference <= 0.33) {
    return true;
  } else {
    return false;
  }
}
