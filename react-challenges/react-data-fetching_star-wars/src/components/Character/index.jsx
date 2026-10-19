import Card from "../Card";
import useSWR from "swr";

// Good to Know // Error Handling

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function Character({ id }) {
  const {
    data: character, // Umbenennung leserlicher
    isLoading,
    error,
  } = useSWR(`https://swapi.py4e.com/api/people/${id}`, fetcher);
  console.log(character);

  if (isLoading) {
    return <h1>Its loading ...</h1>;
  }

  if (error) {
    return <h1>something went wrong ...</h1>;
  }

  return (
    <Card
      id={id}
      name={character.name}
      height={character.height}
      eyeColor={character.eye_color}
      birthYear={character.birth_year}
    />
  );
}
