import axios from "axios";
import { moviesActions } from "./movies.slice";

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(moviesActions.setIsLoading({ isLoading: true }));

    const sendRequest = async () => {
      const response = await axios.get("https://swapi.dev/api/films");

      if (response.status !== 200) {
        throw new Error("Request failed");
      }

      return response.data.results;
    };

    try {
      const movies = await sendRequest();
      dispatch(moviesActions.setMovies({ movies }));
    } catch (error) {
      dispatch(moviesActions.setError({ error }));
    }

    dispatch(moviesActions.setIsLoading({ isLoading: false }));
  };
};
