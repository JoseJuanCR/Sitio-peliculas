import React from 'react'
import Imagenes from '../Imagenes/Imagenes'
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 80px;
  height: 80px;
`

const Logo = () => {
  return (
    <>     
      <ImgStyled src={Imagenes.img11} alt="" />
    </>
  )
}

export default Logo