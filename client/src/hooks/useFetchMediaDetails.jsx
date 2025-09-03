import { useQuery } from "@tanstack/react-query";
import { getTVShowDetails } from "../services/tvShows.services";
import { getMovieDetails } from "../services/movies.services";

export const useFetchMediaDetails = (mediaType, mediaId) => {
  // Fetch media details
  const query = useQuery({
    queryKey: ["details", mediaType, mediaId],
    queryFn: () =>
      (mediaType === "movies" && getMovieDetails(mediaId)) ||
      (mediaType === "tv_shows" && getTVShowDetails(mediaId)),
    retry: false,
    enabled: mediaType && mediaId ? true : false,
    staleTime: 1000 * 60 * 10,
  });

  return query;
};
