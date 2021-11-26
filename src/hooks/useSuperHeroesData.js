import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchSuperHero = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (heroDetails) => {
  return axios.post("http://localhost:4000/superheroes", heroDetails);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHero, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
