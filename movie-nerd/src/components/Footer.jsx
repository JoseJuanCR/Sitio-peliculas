import React from 'react'
import styled from "styled-components";
import Imagenes from './Imagenes/Imagenes';

const ImgStyled = styled.img`
  width: 80px;
  height: 80px;
`
const FooterStyled = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

`

const Footer = () => {
  return (
   <>  
     <FooterStyled>
    <ImgStyled src={Imagenes.img10} alt="" />
    <ImgStyled src={Imagenes.img12} alt="" />
    </FooterStyled> 
  </>
  )
}

export default Footer