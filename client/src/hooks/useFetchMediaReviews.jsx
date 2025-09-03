import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../services/reviews.services";

export const useFetchMediaReviews = (mediaType, mediaId) => {
  // Fetch reviews
  const query = useQuery({
    queryKey: ["reviews", mediaType, mediaId],
    queryFn: () => getReviews(mediaType, mediaId),
    retry: false,
  });

  return query;
};
