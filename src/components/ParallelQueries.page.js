import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

export const ParallelQueriesPage = () => {
  const { data: superHeroesResponse } = useQuery(
    "super-heroes",
    fetchSuperHero
  );
  const { data: friendsResponse } = useQuery("friends", fetchFriends);
  const superHeroesData = superHeroesResponse?.data;
  const friendsData = friendsResponse?.data;

  console.log(superHeroesData);
  console.log(friendsData);

  return <div>parallel queries</div>;
};
