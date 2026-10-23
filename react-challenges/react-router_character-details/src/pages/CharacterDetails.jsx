import { Link, useParams } from "react-router";

export default function CharacterDetails({ characters }) {
  const { id } = useParams();
  const character = characters.find((c) => c.id === Number(id));
  if (!character) {
    return (
      <>
        <h2>Character not found</h2>
        <Link to="/characters"> Back to Charakter List</Link>
      </>
    );
  }
  return (
    <>
      <h1>Character Id: {id}</h1>
      <img src={character?.image} alt={character?.name} />
      <h2>{character?.name}</h2>
      <p>{character?.species}</p>
      <p>{character?.status}</p>
      <Link to="/characters"> Back to Charakter List</Link>
    </>
  );
}
