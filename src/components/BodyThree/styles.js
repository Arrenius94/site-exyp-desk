import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainDiv = styled.div`
  min-height: ${pxParaVh(500)};
  width: 100%;
  display: flex;
  flex-direction: column;
  `

export const BorderTop = styled.div`
  width: 100%;
  height: ${pxParaVh(1)};
  background: #403F3F;
`

export const HeaderDiv = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding-top: ${pxParaVh(76)};
  text-align: center;
  align-items: center;

  & p { 
    color: #B6B8B9;
    text-align: center;
    font-size: ${pxParaClamp(32)};
    font-weight: 400;
  }
`

export const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;  /* centraliza horizontalmente */
  align-items: flex-start;      /* centraliza verticalmente */
  padding-top: ${pxParaVh(144)};
  width: 100%;
  /* ocupa toda a altura da tela */
  gap: ${pxParaVw(170)}; /* espaço entre as colunas */
`

export const LeftTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: ${pxParaVh(36)}; /* distância entre blocos */
  
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* mantém alinhamento do h2 e p */
    text-align: right; /* garante que os textos fiquem visualmente alinhados */
    gap: ${pxParaVh(8)};
    height: ${pxParaVw(152)};
  }

  & h2 {
    color: #fff;
    font-weight: 600;
    font-size: ${pxParaVw(22)};
    margin: 0;
  }

  & p {
    color: #b6b8b9;
    font-size: ${pxParaVw(18)};
    margin: 0;
    text-align: right; /* garante alinhamento com o h2 */
  }
`;


export const IconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxParaVh(36)};

 & > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxParaVw(152)};
  height: ${pxParaVw(152)};
  border-radius: 50%;
  background: #2D2D2D;

  & > svg {
    width: ${pxParaVw(70)};
  }
}

`;

export const RightTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${pxParaVh(36)}; /* distância entre blocos */

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: ${pxParaVh(8)};
    height: ${pxParaVw(152)};
  }

  & h2 {
    color: #fff;
    font-weight: 600;
    font-size: ${pxParaVw(22)};
    margin: 0;
  }

  & p {
    color: #b6b8b9;
    font-size: ${pxParaVw(18)};
    margin: 0;
    text-align: left;
  }
`;