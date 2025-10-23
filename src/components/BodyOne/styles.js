import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainDiv = styled.div`

  /* margin-top: ${pxParaVh(-70)}; */
  height: ${pxParaVh(541)};
  gap: ${pxParaVh(30)};
  min-height: ${pxParaVh(541)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LineTop = styled.div`
  width: 100%;
  display: flex;
  background: #403F3F;
  height: ${pxParaVh(1)};
  min-height: ${pxParaVh(1)};
`

export const BodyOneContainer = styled.div` // LOGO E QUEM SOMO NOS E PARAGRAFO
  display: flex;
  gap: ${pxParaVh(30)};
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const DivImg = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > img {
    width: ${pxParaVw(161)};
  }
`

export const DivMensagems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; 
  margin-bottom: ${pxParaVh(82)};
  gap: ${pxParaVh(28)};

  & > h1 {
    color: #FFF;
    font-size: ${pxParaClamp(64)};
    font-weight: 700;
  }

  & > p {
    color: #B6B8B9;
    font-weight: 500;
    font-size: ${pxParaClamp(32)};
  }
  
`
