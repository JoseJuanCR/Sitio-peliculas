import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.slice(0, 4).map((movie, key) => (
        <Movie movie={movie} key={key} />
      ))}
    </>
  );
};

export default MovieList;