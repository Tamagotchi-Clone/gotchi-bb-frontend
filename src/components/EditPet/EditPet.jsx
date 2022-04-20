import React from 'react';
import './EditPet.css';

export default function EditPet({
  handleSubmit,
  handleDelete,
  pet,
  name,
  setName,
}) {
  return (
    <>
      <h1> Your bb:</h1>
      <form className="editForm" onSubmit={handleSubmit}>
        <img className="petImage" src={pet.image} />
        <input
          placeholder="Edit Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button className="delete" onClick={handleDelete}>
        Delete Pet
      </button>
    </>
  );
}
