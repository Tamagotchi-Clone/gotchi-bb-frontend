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
  if (need.difference >= 0.25) {
    return 'miserable';
  } else if (need.difference >= 0.25) {
    return 'unhappy';
  } else if (need.difference >= 0.25) {
    return 'satisfied';
  } else {
    return 'happy';
  }
}
