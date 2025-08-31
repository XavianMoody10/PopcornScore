import axios from "axios";

export async function getTrendingMedia(mediaType) {
  const url = `http://localhost:3001/trending/${mediaType}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error(error.response.data);
  }
}
