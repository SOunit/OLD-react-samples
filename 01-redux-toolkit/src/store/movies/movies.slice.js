import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      const { movies } = action.payload;
      state.movies = movies;
      state.error = null;
    },
    setError(state, action) {
      const { error } = action.payload;
      state.error = error;
    },
    setIsLoading(state, action) {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
  },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;
