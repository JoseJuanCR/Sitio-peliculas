
/* normalizacion */
import { createGlobalStyle } from "styled-components"

const GlobalStyled = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 62.5%;
}
body, #root {
  background-color: var(--fondo);
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  color:var(--negro);
  justify-content: space-around;
  
  

  --font: "Roboto", sans-serif;
  --fondo: #E1FFB1; 
  --navbar: #C7F2A4;
  --section: #B6E388;
  --secundario: #FCFFB2;
  --negro: #000000;
  --blanco: #FFFFFF;
}`
export default GlobalStyled