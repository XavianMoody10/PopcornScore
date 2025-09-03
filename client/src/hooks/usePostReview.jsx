import { useMutation } from "@tanstack/react-query";
import { postReview } from "../services/reviews.services";
import { useState } from "react";

export const usePostReview = (onSuccess, onError) => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  // Post review
  const mutation = useMutation({
    mutationFn: (variables) => postReview(variables),
    onSuccess: (data) => {
      setTitle("");
      setReview("");
      setRating(1);
      setErrorMessage("");
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
      setErrorMessage(error.message);
    },
  });

  return {
    mutation,
    title,
    setTitle,
    review,
    setReview,
    rating,
    setRating,
    errorMessage,
  };
};
