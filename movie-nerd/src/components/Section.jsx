import React from 'react'
import Logo from './Header/Logo'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const SectionStyled = styled.section`
  background-color: var(--section);
  display: flex;
  height: 25vh;
  max-width: 100vw;
  justify-content: space-around;
  border-radius: 1rem;
  flex-wrap: wrap;
  align-content: center;
`

const LinkStyled = styled(Link)`
  display: inline-block;
  width: 10vw;
  font-size: 2rem;
`

const Section = () => {
  return (
    <SectionStyled>    
      <LinkStyled to = "">Register</LinkStyled>
      <Logo />
      <LinkStyled to = "">Login</LinkStyled>
    </SectionStyled>

  )
}

export default Section