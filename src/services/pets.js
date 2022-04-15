export const getPets = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/pets`);
  const resJson = await res.json();
  return resJson;
};

export const getPetById = async ({ id }) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/pets/${id}`);
  const resJson = await res.json();
  return resJson;
};
