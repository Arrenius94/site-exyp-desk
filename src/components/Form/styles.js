import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: ${pxParaVh(500)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const BorderTop = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: ${pxParaVh(1)};
  background: #403f3f;
`;

export const ContainerLeft = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  padding-top: ${pxParaVh(226)};
  padding-left: ${pxParaVw(100)};

  & > h2 {
    text-align: left;
    color: #FFF;
    font-size: ${pxParaClamp(40)};
    font-weight: 700;
    margin-bottom: ${pxParaVh(50)};
  }

  & > p {
    color: #B6B8B9;
    font-size: ${pxParaClamp(32)};
    font-weight: 400;
  }

  & > p#pMargem {
    margin-bottom: ${pxParaVh(28)};
  }
`

export const ContainerRight = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  padding-right: ${pxParaVw(190)};
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  
  & > label {
    color: #fff;
    font-size: ${pxParaClamp(20)};
    font-weight: 700;
  }

  & > input {
    padding-left: ${pxParaClamp(16)};
    width: ${pxParaVw(380)};
    height: ${pxParaVh(72)};
    border-radius: ${pxParaVw(8)};
    border-style: none;
    background: #2D2D2D;
    outline: none;
    font-size: ${pxParaClamp(20)};
    font-weight: 300;
    color: #fff;

    &::placeholder{
      color: #777;
    }
  }

`

export const WidhtTopDivRight = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: ${pxParaVh(18)};
  height: ${pxParaVh(770)};
`

export const FormLinha = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${pxParaVh(56)};
`

