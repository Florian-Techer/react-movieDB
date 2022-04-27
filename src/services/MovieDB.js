// service called by front who call api services
import * as MovieDBApi from "./api/MovieDBAPI";

export const searchMovie = async (search) => {
  try {
    const response = await MovieDBApi.searchMovie(search);

    return response;
  } catch (error) {
    throw error;
  }
};
