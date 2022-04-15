export const getPets = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/pets`);
  return res.json();
};

export const getPetById = async ({ id }) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/pets/${id}`);
  return res.json();
};
