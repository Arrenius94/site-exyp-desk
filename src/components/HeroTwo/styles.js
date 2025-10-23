import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

const REFRACTION_PX = 80; // blur em px
const DEPTH_PX = 20; // shadow vertical offset
const DISPERSION_PX = 100; // halo spread
const FROST_ALPHA = 0.08; // overlay alpha (8%)
const ANGLE_DEG = -45; // ângulo do gradiente

export const MainDivs = styled.div`
  width: 100%;
  height: ${pxParaVh(850)};
  min-height: ${pxParaVh(850)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* margin-top: ${pxParaVh(-40)}; */
  z-index: 0;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: ${pxParaVh(798)};
  max-height: ${pxParaVh(850)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const VidroContainer = styled.div`
  width: 100%;
  height: ${pxParaVh(798)};
  max-height: ${pxParaVh(850)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MainDiv = styled.div`
  // container luz
  background: linear-gradient(180deg, #6e00ff 0%, #f268a9 100%);
  filter: blur(${pxParaVw(25)});
  border-radius: ${pxParaVw(24)};
  /* margin-top: ${pxParaVh(241)}; */
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxParaVw(1519)};
  height: ${pxParaVh(798)};
  position: absolute;
  z-index: 1;
`;

export const GlassLens = styled.div`
  // container vidro
  width: ${pxParaVw(1556)};
  height: ${pxParaVh(850)};
  border-radius: ${pxParaVw(24)};
  background: rgba(119, 119, 119, 0.08);
  border-radius: ${pxParaVw(16)};
  box-shadow: 0 ${pxParaVw(4)} ${pxParaVw(302)} rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(${pxParaVw(10)});
  -webkit-backdrop-filter: blur(${pxParaVw(10)});
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const CenterDiv = styled.div`
  filter: none;
  border-radius: ${pxParaVw(20)} ${pxParaVw(20)} 0 0;
  width: ${pxParaVw(1492)};
  height: ${pxParaVh(786)};
  background: #2d2d2d;
  position: absolute;
  z-index: 3;
`;

export const DivLinearGradient = styled.div`
  width: 100%;
  height: ${pxParaVh(827)};
  display: flex;
  background: linear-gradient(180deg, rgba(242, 104, 169, 0) 0%,  rgba(242, 104, 169, 0.6) 100%);
  filter: blur(2px);
  position: absolute;
  bottom: -50%;
  z-index: 0;
  
`;
