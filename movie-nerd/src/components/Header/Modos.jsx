import React from 'react'
import Imagenes from '../Imagenes/Imagenes'
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 80px;
  height: 80px;
`

const DivStyled= styled.div`
    display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
`

const Modos = () => {
  return (
    <>     
     <DivStyled>
        <ImgStyled src={Imagenes.img13} alt="" />
        <ImgStyled src={Imagenes.img4} alt="" />
    </DivStyled>
  </>
  )
}

export default Modos