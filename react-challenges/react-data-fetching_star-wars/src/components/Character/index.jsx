import Card from "../Card";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
export default function Character({ id }) {
  const { data, isLoading, error } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher,
  );
  console.log(data);

  if (isLoading) {
    return <h1>Its loading ...</h1>;
  }

  if (error) {
    return <h1>something went wrong ...</h1>;
  }

  return (
    <Card
      id={id}
      name={data.name}
      height={data.height}
      eyeColor={data.eye_color}
      birthYear={data.birth_year}
    />
  );
}
