import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainContainer = styled.div`
  margin-top: ${pxParaVh(-100)};
  position: relative;
  width: 100%;
  height: ${pxParaVh(650)};
  min-height: ${pxParaVh(650)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #1A233D 0%, #0D1117 63%);
`;

export const DivPadding = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ContentContainer = styled.div`
  position: relative;
   width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;  
  gap: ${pxParaVh(190)};
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${pxParaVw(20)};

  & > p { 
    color: #FFF;
    font-weight: 300;
    font-size: ${pxParaVw(48)};
  }

  & > img {
    width: ${pxParaVw(60)};
    height: ${pxParaVw(60)};

  }
`

export const IconeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${pxParaVw(40)};
  
  & > img {
    width: ${pxParaVh(50)};
    height: ${pxParaVh(50)};
  }
`

export const ContainerRight = styled.div`
  display: flex;
  gap: ${pxParaVw(68)};
  flex-direction: row;  
`

export const ContainerLinks = styled.div`
display: flex;
gap: ${pxParaVw(18)};
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
height: ${pxParaVh(286)};

& > p {
  color: #FFF;
  font-weight: 400;
  font-size: ${pxParaVw(20)};
  cursor: pointer;
 transition: all 0.3s;

  &:hover{
    color: #eee;
  }

  &:active {
    opacity: 0.8;
  }
  
}

& > p#titulo {
  cursor: default;
  font-weight: 700;
  font-size: ${pxParaVw(28)};
  color: #FFF;
  margin-bottom: ${pxParaVh(13)};

  &:hover{
    color: #FFF;
  }

  &:active {
    opacity: 1;
  }
}
`

export const DivBlueBar = styled.div`
  position: absolute;
  width: ${pxParaVw(1745)};
  height: ${pxParaVh(8)};
  border-radius: ${pxParaVw(8)};
  background-color: #285EFE;
  z-index: 2;

    & > svg {
    filter: blur(${pxParaVw(5)});
  }
`;

export const LightBar = styled.div`
 position: absolute;
width: ${pxParaVw(1740)};
height: ${pxParaVh(2)};
border-radius: ${pxParaVw(2)};
background-color: #fff;
z-index: 3;
`

export const DivLightBar = styled.div`
width: 100%;
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 bottom: 5%;
`

// export const DivBlurBar = styled.div`
//   position: absolute;
//   width: ${pxParaVw(1745)};
//   height: ${pxParaVh(8)};
//   border-radius: ${pxParaVw(8)};
//   z-index: 0;

//   & > svg {
//     filter: blur(${pxParaVw(5)});
//   }

// `

export const DivShadow = styled.div`
  position: absolute;
  z-index: 1;
  background: #285EFE;
  width: ${pxParaVw(1920)};
  height: ${pxParaVh(55)};
  filter: blur(${pxParaVw(150)});
`

export const DivShadowLines = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  & > svg {
    width: ${pxParaVw(1770)};
    min-height: ${pxParaVh(40)};
  }
`
