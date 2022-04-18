import React from 'react';

export default function EditPet({
  handleEdit,
  handleSubmit,
  updateUserPet,
  handleDelete,
  pet,
}) {
  return (
    <>
      <h1> Your Pet:</h1>
      <h3>{pet.pet}</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Edit Name" type="text" />
        <input type="submit" />
      </form>
      <button onClick={handleDelete}>Delete Pet</button>
    </>
  );
}
