import { useState } from "react";
import {
  DivItens,
  GlassLens,
  GlassLensSelect,
  MainDiv,
  MainDivItens,
  MainDivTopGradient,
} from "./styles";
import { BodyOne } from "../BodyOne/BodyOne";
import { BodyTwo } from "../BodyTwo/BodyTwo";
import { Carousel} from "../Carousel/Carousel"; //
import { BodyThree } from "../BodyThree/BodyThree";

export function HeroMid() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(0); // 0 até 3

  const handleProdutoSelecionado = (valor) => {
    setProdutoSelecionado(valor);
  };

  return (
    <MainDiv>
      <MainDivTopGradient />
      <MainDivItens>
        <DivItens>
          <GlassLensSelect ativo={produtoSelecionado !== 0}>
            <p onClick={() => handleProdutoSelecionado(0)}>iConIT</p>
          </GlassLensSelect>
          <GlassLensSelect ativo={produtoSelecionado !== 1}>
            <p onClick={() => handleProdutoSelecionado(1)}>Monitor.ia</p>
          </GlassLensSelect>
          <GlassLensSelect ativo={produtoSelecionado !== 2}>
            <p onClick={() => handleProdutoSelecionado(2)}>Miper</p>
          </GlassLensSelect>
          <GlassLensSelect ativo={produtoSelecionado !== 3}>
            <p onClick={() => handleProdutoSelecionado(3)}>Hylas</p>
          </GlassLensSelect>

          <GlassLens ativo={produtoSelecionado} />
        </DivItens>

        <p>
          Aqui você confere alguns dos aplicativos desenvolvidos pela <br />{" "}
          nossa equipe
        </p>
      </MainDivItens>
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <Carousel />
    </MainDiv>
  );
}
