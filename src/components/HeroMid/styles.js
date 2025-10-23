import styled from "styled-components";
import { pxParaVh, pxParaVw, pxParaClamp } from "../../responsive";

export const MainDiv = styled.div`
  position: relative;
  margin-top: ${pxParaVh(-100)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  /* gap: ${pxParaVh(30)}; */
  z-index: 3;
  background: linear-gradient(180deg, #1a233d 0%, #0d1117 63%);
`;

export const MainDivTopGradient = styled.div`
  position: absolute;
  top: 0;
  height: ${pxParaVh(74)};
  background: linear-gradient(
    180deg,
    rgba(138, 104, 242, 0.3) 0%,
    rgba(115, 115, 115, 0) 100%
  );
  width: 100%;
`;

export const MainDivItens = styled.div`
  gap: ${pxParaVh(28)};
  height: ${pxParaVh(318)};
  min-height: ${pxParaVh(318)};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  & > P {
    color: #c4c4c4;
    font-size: ${pxParaClamp(24)};
    font-weight: 700;
    text-align: center;
  }
`;
export const DivItens = styled.div`
  height: ${pxParaVh(92)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${pxParaVw(46)};
  border: ${pxParaVw(1)} solid #403f3f;
  gap: ${pxParaVw(18)};
  position: relative;
  padding: 0 ${pxParaVw(16)};
`;

export const GlassLens = styled.div`
  width: ${pxParaVw(210)};
  height: ${pxParaVh(62)};
  border-radius: ${pxParaVw(31)};
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: ${pxParaVw(1)} solid #c4c4c4;
  backdrop-filter: blur(${pxParaVw(10)});
  -webkit-backdrop-filter: blur(${pxParaVw(10)});
  position: absolute;
  left: ${({ ativo }) =>
    ativo == 0
      ? `${pxParaVw(16)}`
      : ativo == 1
      ? `${pxParaVw(244)}`
      : ativo == 2
      ? `${pxParaVw(472)}`
      : ativo == 3
      ? `${pxParaVw(700)}`
      : null};
  transition: all 0.3s ease;
`;

export const GlassLensSelect = styled.div`
  width: ${pxParaVw(210)};
  height: ${pxParaVh(62)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${pxParaVw(31)};
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border: ${pxParaVw(1)} solid #ffffff00;
  backdrop-filter: blur(${pxParaVw(0)});
  -webkit-backdrop-filter: blur(${pxParaVw(0)});
  transition: all 10s ease-in;
  z-index: 1;

  & > p {
    width: ${pxParaVw(210)};
    font-weight: 700;
    font-size: ${pxParaClamp(32)};
    text-align: center;
    color: #fff;
  }

  ${({ ativo }) =>
    ativo
      ? `
        &:hover {
					border-radius: ${pxParaVw(31)};
          cursor: pointer;
					background: linear-gradient(
						180deg,
						rgba(255, 255, 255, 0.15) 0%,
						rgba(255, 255, 255, 0.05) 100%
					);
					backdrop-filter: blur(${pxParaVw(10)});
					-webkit-backdrop-filter: blur(${pxParaVw(10)});
      `
      : `
        &:hover {
          cursor: pointer;
          background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
      `}
`;
