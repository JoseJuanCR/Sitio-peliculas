import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import styled from "styled-components";

const DivStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 10px;
  background-color: var(--fondo);
  height: 30vh;
  max-width: 20vw;
  
`

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=d06bf5f4de722c7960c55d3386984823')
      .then((res) => setMovies(res.data.results));
  }, []);
 
 
  return (
    <DivStyled>
      <MovieList movies ={movies} />
    </DivStyled>
  );
};
export default MovieContainer;