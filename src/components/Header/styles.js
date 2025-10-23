import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainContainer = styled.div` // div main do header
 width: 100%;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 z-index: 999;
`

export const ContentContainer = styled.div` // div main dos elementos do header
 width: 100%;
 padding: ${pxParaVh(20)} ${pxParaVw(30)}; 
 flex-direction: row;
 display: flex;
 align-items: center;
 justify-content: space-between;
  z-index: 999;
`

export const LeftContainer = styled.div`
width: 50%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: ${pxParaVw(42)};
color: white;
`

export const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: white;
`

export const Logo = styled.img`
    width: ${pxParaVw(60)};
`

export const NavBarContainer = styled.div`  // div dos nav bar
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${pxParaVw(7)};

    &:hover {
        cursor: pointer;
    }

    & > p {
    color: #FFF;
    font-weight: 700;
    transition: all .3s;
    font-size:${pxParaClamp(20)}
    }
    
    & > svg {
        width: ${pxParaVw(16)};
    }

    &:hover > p {
        color: #00C6FF; 
    }

    &:active > p {
         opacity: 0.5;
    }
`

export const InputContainer = styled.div` // div do input header
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    & > svg {
        position: absolute;
        left: ${pxParaVw(12)};
        width: ${pxParaVw(24)};
        color: #777777;
    }
`

export const InputHeader = styled.input` // input do header com a lupa
    
    width: ${pxParaVw(452)};
    height: ${pxParaVh(46)};
    background: rgba(196, 196, 196, 0.20);
    color: #C4C4C4;
    font-size: ${pxParaClamp(16)};
    font-weight: 700;
    border: ${pxParaVw(1)} solid #C4C4C4;
    border-radius: ${pxParaVw(8)};
    padding-left: ${pxParaVw(48)};
    outline: none;
    &::placeholder{
      font-size: ${pxParaClamp(16)};
      font-weight: 700;
      color: #C4C4C4;
      line-height: normal;
    }

     &:focus {
    border-color: #C4C4C4;
    outline: none;
    box-shadow: none;
    transform: none; 
  }
`

