import React from "react";
import MovieContainer from "./MovieContainer";
import styled from "styled-components";
// import Carrusel from '../components/Carrusel';
const MainStyled = styled.main`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  height: 45vh;
  max-width: 100vw;
`;

const Main = () => {
  return (
    <MainStyled>
      <MovieContainer />
      
    </MainStyled>
  );
};

export default Main;
