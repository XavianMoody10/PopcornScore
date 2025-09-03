import axios from "axios";

export async function getMoviesCollectionByList(list, page) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/movies/list`;

  try {
    const response = await axios.get(url, { params: { list, page } });
    return response.data;
  } catch (error) {
    if (error?.response) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

export async function getMovieDetails(movieId) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/movies/details`;

  try {
    const response = await axios.get(url, { params: { movieId } });
    return response.data;
  } catch (error) {
    if (error?.response) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}
