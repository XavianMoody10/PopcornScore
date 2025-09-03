import axios from "axios";

export async function postReview(data) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/review`;

  const { mediaId, title, review, rating } = data;

  try {
    if (!mediaId) {
      throw new Error("mediaId is required");
    }

    if (!title) {
      throw new Error("Please enter a title");
    }

    if (!review) {
      throw new Error("Please give a review");
    }

    if (!rating) {
      throw new Error("Please add a rating");
    }

    const response = await axios.post(url, { ...data });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}

export async function getReviews(mediaType, mediaId) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/review`;

  try {
    if (!mediaType) {
      throw new Error("mediaType is required");
    }

    if (!mediaId) {
      throw new Error("mediaId is required");
    }

    const response = await axios.get(url, { params: { mediaType, mediaId } });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}
