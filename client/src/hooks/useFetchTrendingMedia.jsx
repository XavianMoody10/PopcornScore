import { useQuery } from "@tanstack/react-query";
import { getTrendingMedia } from "../services/trending.services";

export const useFetchTrendingMedia = (mediaType) => {
  // Fetch trending media
  const query = useQuery({
    queryKey: ["trending", mediaType],
    queryFn: () => getTrendingMedia(mediaType),
    staleTime: 1000 * 60 * 15, // 15 minutes
  });

  return query;
};
