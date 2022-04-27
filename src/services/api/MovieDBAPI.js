// call api

import axios from "axios";

const { REACT_APP_MOVIE_DB_API_KEY, REACT_APP_MOVIE_DB_URL } = process.env;

export const searchMovie = async (search) => {
    try {
        const response = await axios.get(
            `${REACT_APP_MOVIE_DB_URL}/search/movie?api_key=${REACT_APP_MOVIE_DB_API_KEY}&query=${search}&language=fr-FR`
        )
        return response.data;
    } catch (error) {
        throw error;
    }
};