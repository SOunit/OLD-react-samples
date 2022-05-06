import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchMovies } from "../store/movies/movies.actions";
import ButtonContainer from "./ButtonContainer";
import ComponentContainer from "./ComponentContainer";

const Movies = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const isLoading = useSelector((state: RootState) => state.movies.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const fetchDataHandler = () => {
    dispatch(fetchMovies());
  };

  return (
    <ComponentContainer>
      <h1>Movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        movies.map((movie) => <div key={movie.title}>{movie.title}</div>)
      )}
      <ButtonContainer>
        <button onClick={fetchDataHandler}>Fetch Data</button>
      </ButtonContainer>
    </ComponentContainer>
  );
};

export default Movies;
