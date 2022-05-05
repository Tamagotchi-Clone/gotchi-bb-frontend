import './EditPet.css';

export default function EditPet({
  handleSubmit,
  handleDelete,
  pet,
  name,
  setName,
}) {
  return (
    <div className="edit-container">
      <h1>
        edit your <b>bb</b>
      </h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <img className="pet-image" src={pet.image} />
        <input
          placeholder={pet.name}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Change Name</button>
        <button className="delete" onClick={handleDelete}>
          Delete bb
        </button>
      </form>
    </div>
  );
}
