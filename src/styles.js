import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "./responsive";

export const MainContainer = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    gap: ${pxParaVh(67)};
    background: linear-gradient(180deg, #1A233D 0%, #0D1117 100%);

    &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: orange;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #FFF;
    border-radius: 6px;
  }
`
