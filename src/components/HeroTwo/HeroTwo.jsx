import {
  CenterDiv,
  DivLinearGradient,
  GlassLens,
  MainDiv,
  MainDivs,
  VideoContainer,
  VidroContainer,
} from "./styles";

export function HeroTwo() {
  return (
    <MainDivs>
      <VideoContainer>
        <VidroContainer>
          <MainDiv />
          <GlassLens />
        </VidroContainer>

        <CenterDiv>{/* AQUI VAI FICAR VIDEO TALVEZ */}</CenterDiv>
      </VideoContainer>
      
      <DivLinearGradient />
    </MainDivs>
  );
}
