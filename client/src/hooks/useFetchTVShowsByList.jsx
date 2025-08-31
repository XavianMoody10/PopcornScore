import { useQuery } from "@tanstack/react-query";
import { getTVShowsCollectionByList } from "../services/tvShows.services";

export const useFetchTVShowsByList = (listValue, page) => {
  const query = useQuery({
    queryKey: ["tv-shows", listValue, page],
    queryFn: () => getTVShowsCollectionByList(listValue, page),
    retry: false,
  });

  return query;
};
