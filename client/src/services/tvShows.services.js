import axios from "axios";

export async function getTVShowsCollectionByList(list, page) {
  const url = `http://localhost:3001/tv_shows/list`;

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
