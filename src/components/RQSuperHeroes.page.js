import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { data, isLoading } = useQuery("super-heroes", fetchSuperHero);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
