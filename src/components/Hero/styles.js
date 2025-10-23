import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainContainer = styled.div`
 width: 100%;
 display: flex;
 height: ${pxParaVh(806)};
 min-height: ${pxParaVh(806)};
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 position: relative; // div main Hero-1
`

export const SectionLeft = styled.div` 
    position: absolute;
    z-index: 1;
`

export const SectionRight = styled.div`
    position: absolute;
    z-index: 0;
    right: ${pxParaVw(-80)};
`

export const DivGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxParaVh(85)};

`

export const FirstDivSectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${pxParaVw(270)};
      & > h1 {
    color: #FFF;
    font-size: ${pxParaClamp(128)};
    font-weight: 700;
  }  

  & > p {
    color: #C4C4C4;
    font-size: ${pxParaClamp(24)};
    font-weight: 700;
  }

`
export const SecondDivSectionLeft = styled.div`
margin-left: ${pxParaVw(270)};
align-items: center;
display: flex;
flex-direction: row;
gap: ${pxParaVw(24)};
`

export const ButtonOpacity = styled.button`
  height: ${pxParaVh(72)};
  width: ${pxParaVw(332)};
  border-radius: ${pxParaVw(8)};
  border: ${pxParaVw(2)} solid #FFF;
  background: rgba(196, 196, 196, 0.10);
  box-shadow: 0 ${pxParaVw(4)} ${pxParaVw(4)} 0 rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxParaVw(10)};
  cursor: pointer;

  color: #FFF;
  font-size: ${pxParaClamp(20)};
  font-weight: ${pxParaVh(400)};
  letter-spacing: 0.5px;

  & > svg {
    width: ${pxParaVw(24)};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
    transition: 0.2s ease;
  } 
`;

export const Divisoria = styled.div`
  background: #868686;
  width: ${pxParaVw(1)};
  height: ${pxParaVh(56)};
`

export const DivInputBtn = styled.div`
  width: ${pxParaVw(663)};
  max-width: ${pxParaVw(663)};
  height: ${pxParaVh(72)};
  display: flex;
  position: relative;
  align-items: center;
`
export const InputEmail = styled.input`
  width: ${pxParaVw(663)};
  max-width: ${pxParaVw(663)};
  height: ${pxParaVh(72)};
  padding: 0 ${pxParaVw(250)} 0 ${pxParaVw(16)};
  border: none;
  display: flex;
  background: #FFF;
  border-radius: ${pxParaVw(8)};
  box-shadow: 0 0 ${pxParaVw(100)} ${pxParaVw(2)} rgba(255, 255, 255, 0.20); 
  font-size: ${pxParaClamp(20)};

  &::placeholder{
    color: #777;
    font-size: ${pxParaClamp(20)};
    font-weight: ${pxParaVw(700)};
  }

  &:focus{
    outline: none;
  }
`

export const BtnInputBlue = styled.button`
  position: absolute;
  font-size: ${pxParaClamp(20)};
  font-weight: ${pxParaClamp(700)};
  height: ${pxParaVh(64)};
  width: ${pxParaVw(241)};
  color: #fff;
  border: none; 
  border-radius: ${pxParaVw(6)};
  right: ${pxParaVw(4)};
  background: #285efe;
  cursor: pointer;
  transition: all 0.2s ease; 
  &:hover {
    background: #1e4ae0; 
  }

  
  &:active {
    background: #1538b8; 
   
  }

  /* Opcional: remover contorno azul de foco */
  &:focus {
    outline: none;
  }
`;



export const LogoExypDesk = styled.img`
    width: ${pxParaVw(806)};
    opacity: 0.3;
`



