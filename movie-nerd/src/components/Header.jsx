import React from 'react'
import Logo from './Header/Logo'
import MenuH from './Header/MenuH'
import Nav from './Header/Nav'
import styled from "styled-components";
const HeaderStyled = styled.header`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: space-around;
`

const Header = () => {
  return (
    <HeaderStyled>
      
      <Nav />
      {/* <MenuH /> */}
      
    </HeaderStyled>
    

  )
}

export default Header