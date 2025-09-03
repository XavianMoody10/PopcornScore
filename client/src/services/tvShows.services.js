import axios from "axios";

export async function getTVShowsCollectionByList(list, page) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/tv_shows/list`;

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

export async function getTVShowDetails(seriesId) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/tv_shows/details`;

  try {
    const response = await axios.get(url, { params: { seriesId } });
    return response.data;
  } catch (error) {
    if (error?.response) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}
