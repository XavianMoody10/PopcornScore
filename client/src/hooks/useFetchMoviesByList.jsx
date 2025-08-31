import { useQuery } from "@tanstack/react-query";
import { getMoviesCollectionByList } from "../services/movies.services";

export const useFetchMoviesByList = (listValue, page) => {
  const query = useQuery({
    queryKey: ["movies", listValue, page],
    queryFn: () => getMoviesCollectionByList(listValue, page),
    retry: false,
  });

  return query;
};
