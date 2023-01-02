import React from "react";
import styled from "styled-components";

const Tarjeta = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30rem;
  border: 3px solid var(--section);
  height: 400px;
  padding: 25px;
  border-radius: 10px;
  font-size: 2rem;
  margin: 5px;
  img {
    max-width: 150px;
  }
`;

const Movie = ({ movie }) => {
  return (
    <Tarjeta >
        <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} />
        <h3> Titulo: {movie.original_title} </h3>
        {/* <h2>Reseña: {movie.overview}</h2> */}
    </Tarjeta>
  );
};

export default Movie;