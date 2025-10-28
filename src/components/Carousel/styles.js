import styled, { keyframes } from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: ${pxParaVh(500)};
  display: flex;
  flex-direction: column;
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

export const DivItens = styled.div`
  width: 80%;
  padding: ${pxParaVh(50)};
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  gap: ${pxParaVh(50)};
`;

export const DivTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > h2 {
    color: #fff;
    font-size: ${pxParaClamp(40)};
    font-weight: 700;
  }
`;

// export const DivCarousel = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
//   gap: ${pxParaVw(100)};
//   height: ${pxParaVh(128)};
//   overflow-x: scroll;
//   scroll-behavior: auto;
//   scrollbar-width: none; /* Firefox */
//   -ms-overflow-style: none; /* IE/Edge */

//   &::-webkit-scrollbar {
//     display: none; /* Chrome/Safari */
//   }
// `;

export const DivCarousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${pxParaVw(100)};
  height: ${pxParaVh(128)};

  overflow: hidden;
  scroll-behavior: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }

  /* 🔥 Aqui é o truque: deixa o conteúdo bem largo pra permitir scroll */
  width: 100%;
  white-space: nowrap;

  overflow: hidden; /* esconde o que sai pelas bordas */
  position: relative;
 
`;

export const IconesDiv = styled.div`
  flex: 0 0 auto; /* <- essencial pra o scroll funcionar */
  display: flex;
  flex-direction: row;
  width: ${pxParaVw(100)};
  height: ${pxParaVw(100)};
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & > svg {
    height: ${pxParaVw(90)};
  }
`;

const scrollX = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* move metade do conteúdo (duplicado) */
`;

export const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  width: ${pxParaVw(250)};
  height: 100%;
  z-index: 2;
  pointer-events: none;

  ${(props) =>
    props.$direction === "left"
      ? `left: 0;
         -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
         mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));`
      : `right: 0;
         -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));
         mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));`}
`;


export const Track = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  gap: 20px; /* ou o que você estiver usando */
  overflow-x: hidden; /* esconde a barra de scroll */
  white-space: nowrap; /* garante que os itens fiquem em linha */
  will-change: transform;
  animation: ${scrollX} 30s linear infinite;
`;
