import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainDiv = styled.div`
width: 100%;
height: ${pxParaVh(690)};
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const LineTop = styled.div`
 position: absolute;
  width: 100%;
  display: flex;
  background: #403F3F;
  z-index: 4;
  height: ${pxParaVh(1)};
  min-height: ${pxParaVh(1)};
`

export const LeftDiv = styled.div`
  display: flex;
  gap: ${pxParaVh(60)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 49%;

`
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  & span {
    color: #FFF;
    font-size: ${pxParaClamp(32)};
    font-weight: 700;
  }

  & p {
    color: #B6B8B9;
    font-size: ${pxParaClamp(32)};
    font-weight: 400;
  }
`
export const LinkMid = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${pxParaVw(10)};
  
  & a {
      position: relative;
      color: #63BDFF;
      font-size: ${pxParaClamp(32)};
      font-weight: 700;
      text-decoration: none;
      transition: all .25s;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.052vw; /* Ajuste a altura conforme necessário */
    bottom: 0;
    left: 0;
    background-color: #63BDFF;
    transition: width 0.25s ease-out;
  }

  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    cursor: pointer;
  }
  }

  & svg {
    width: ${pxParaVw(10)};
    color: #63BDFF;
  }

`

export const LineMid = styled.div`
  width: ${pxParaVw(1)};
  background: #403F3F;
`
///////////////// CONTAINER DA DIREITA ///////////////////////

export const RightDiv = styled.div`
 gap: ${pxParaVh(60)};
  width: 49%;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const ImageRightDiv = styled.div`
  position: relative;
   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${pxParaVw(760)};
  height: ${pxParaVh(507)};
  min-height: ${pxParaVh(507)};
` 

export const LenteDiv = styled.div`
 position: relative;
 width: ${pxParaVw(760)};
  height: ${pxParaVh(507)};
  min-height: ${pxParaVh(507)};
  border-radius: ${pxParaVw(30)};
  background: rgba(196, 196, 196, 0.10);
  border: ${pxParaVw(1)} solid #c4c4c4;
  backdrop-filter: blur(${pxParaVw(10)});
  display: flex;          
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(${pxParaVw(10)});
`

export const GreyDiv = styled.div`
  width: ${pxParaVw(720)};
  height: ${pxParaVh(465)};
  position: absolute;
  background: #C4C4C4;
  border-radius: ${pxParaVh(30)};
`
