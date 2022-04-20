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
    <div className="editPetBox">
      <h1> edit your bb </h1>
      <form className="editForm" onSubmit={handleSubmit}>
        <img className="petImage" src={pet.image} />
        <input
          placeholder={pet.name}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Change Name</button>
      </form>
      <button className="delete" onClick={handleDelete}>
        Delete bb
      </button>
    </div>
  );
}
