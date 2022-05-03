// call api

import axios from "axios";

/* const { REACT_APP_MOVIE_DB_API_KEY, REACT_APP_MOVIE_DB_URL } = process.env; */


export const searchMovie = async (search) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=f6d73d0259fc80c93257d70f00630108&query=${search}&language=fr-FR`
        )
        return response.data;
    } catch (error) {
        throw error;
    }
};