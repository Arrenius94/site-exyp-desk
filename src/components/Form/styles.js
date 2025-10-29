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
  padding-bottom: ${pxParaVh(400)};
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
  padding-left: ${pxParaVw(70)};

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
  padding-right: ${pxParaVw(70)};
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  
  & > label {
    padding-left: ${pxParaClamp(16)};
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
padding-top: ${pxParaVh(90)};
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

export const DivTextArea = styled.div `
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${pxParaVh(48)};

 & > textarea {
    border-radius: ${pxParaVw(8)};
    border-style: none;
    outline: none;
    padding: ${pxParaVh(25, 575, 234, 16)};
    background: #2D2D2D;
    color: #fff;
    font-size: ${pxParaClamp(20)};
    font-weight: 700;
    width: ${pxParaVw(816)};
    height: ${pxParaVh(281)};
    color: #fff;

    &::placeholder{
      color: #777;
    }
  }
`

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: ${pxParaVh(36)};

  & > button {
    width: ${pxParaVh(152)};
    height: ${pxParaVw(64)};
    border-radius: ${pxParaVw(6)};
    background: #285EFE;
    color: #fff;
    font-size: ${pxParaClamp(20)};
    font-weight: 700;
     border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #1f4cd1;
      transform: translateY(-2px);
    }
    &:active {
      background: #1538a3;
      transform: scale(0.97);
    }

  }
`

