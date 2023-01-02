import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Logo from './Logo';

const H1Styled = styled.h1`
  +|ng: 3.5rem;
  font-size: 30px;

  rotate: -15deg;
`
const DivStyled= styled.div`
    display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
`
const TitleLogo = () => {
  return (
    <DivStyled>
        <Logo />
        <H1Styled>Movie Nerd </H1Styled>
    </DivStyled>
  )
}

export default TitleLogo