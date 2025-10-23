const larguraBase = 1920;
const alturaBase = 1080;

;
const pxParaVw = (valorPx) => `${(valorPx / larguraBase) * 100}vw`;
const pxParaVh = (valorPx) => `${(valorPx / alturaBase) * 100}vh`;
const pxParaClamp = (px, min = 16, max = 200) => `clamp(${min}px, ${(px / larguraBase) * 100}vw, ${max}px)`;



export { pxParaVw, pxParaVh, pxParaClamp};
