import React from 'react';

export default function EditPet({
  handleSubmit,
  handleDelete,
  pet,
  name,
  setName,
}) {
  return (
    <>
      <h1> Your Pet:</h1>
      <h3>{pet.pet}</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Edit Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDelete}>Delete Pet</button>
    </>
  );
}
