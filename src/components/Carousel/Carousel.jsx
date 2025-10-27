import { BorderTop, DivCarousel, DivItens, DivTitulo, IconesDiv, MainContainer } from "./styles";
import AnthropicIcon from "../../assets/icons-empresa-svg/anthropic-icon";
import AwsIcon from "../../assets/icons-empresa-svg/aws-icon";
import FigmaIcon from "../../assets/icons-empresa-svg/buble-icon";
import FireBaseIcon from "../../assets/icons-empresa-svg/devIcon-icon";
import DockerIcon from "../../assets/icons-empresa-svg/docker-icon";
import ExpoIcon from "../../assets/icons-empresa-svg/expo-icon";
import GitHubIcon from "../../assets/icons-empresa-svg/github-icon";
import JavaScriptIcon from "../../assets/icons-empresa-svg/javascript-icon";
import QdrantIcon from "../../assets/icons-empresa-svg/losangulo";
import MongoDbIcon from "../../assets/icons-empresa-svg/mongodb-icon";
import OpenAiIcon from "../../assets/icons-empresa-svg/openai-icon";
import PhytonIcon from "../../assets/icons-empresa-svg/phyton-icon";
import PineConeIcon from "../../assets/icons-empresa-svg/pineCone-icon";
import PostgresIcon from "../../assets/icons-empresa-svg/postgresql-icon";
import PostManIcon from "../../assets/icons-empresa-svg/postman-icon";
import ReactIcon from "../../assets/icons-empresa-svg/react-icon";
import RenderIcon from "../../assets/icons-empresa-svg/render-icon";
import RustIcon from "../../assets/icons-empresa-svg/rust-icon";
import SurrealIcon from "../../assets/icons-empresa-svg/surrealDb-icon";
import { useEffect, useRef } from "react";




export function Carousel () {

  const carouselRef = useRef(null);

  const icons = [
    { id: 1, element: <AnthropicIcon />, alt: "Anthropic"},
    { id: 2, element: <AwsIcon/>, alt: "ASW"},
    { id: 3, element: <FigmaIcon/>, alt: "Figma"},
    { id: 4, element: <FireBaseIcon/>, alt: "FireBase"},
    { id: 5, element: <DockerIcon/>, alt: "Docker"},
    { id: 6, element: <ExpoIcon/>, alt: "Expo"},
    { id: 7, element: <GitHubIcon/>, alt: "GitHub"},
    { id: 8, element: <JavaScriptIcon/>, alt: "JavaScript"},
    { id: 9, element: <QdrantIcon/>, alt: "Qdrant"},
    { id: 10, element: <MongoDbIcon/>, alt: "MongoDB"},
    { id: 11, element: <OpenAiIcon/>, alt: "OpenAI"},
    { id: 12, element: <PhytonIcon/>, alt: "Python"},
    { id: 13, element: <PineConeIcon/>, alt: "PineCone"},
    { id: 14, element: <PostgresIcon/>, alt: "Postgres"},
    { id: 15, element: <PostManIcon/>, alt: "PostMan"},
    { id: 16, element: <ReactIcon/>, alt: "React"},
    { id: 17, element: <RenderIcon/>, alt: "Render"},
    { id: 18, element: <RustIcon/>, alt: "Rust"},
    { id: 19, element: <SurrealIcon/>, alt: "Surreal"},
  ];

const loopIcons = [...icons, ...icons];

useEffect(() => {
  const carousel = carouselRef.current;
  if (!carousel) return;

  let scrollStep = 0.5; // velocidade (quanto maior, mais rápido)
  let animationFrameId;

  const scroll = () => {
    carousel.scrollLeft += scrollStep;

    // quando chega ao meio (metade duplicada), volta pro início
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    }

    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationFrameId);
}, []);


  return (
    <MainContainer>
      <BorderTop/>
      <DivItens>
      <DivTitulo>
        <h2>Tecnologias que usamos</h2>
      </DivTitulo>
     <DivCarousel ref={carouselRef}>
          {loopIcons.map((i, index) => (
            <IconesDiv key={index}>{i.element}</IconesDiv>
          ))}
        </DivCarousel>
      </DivItens>
    </MainContainer>
  )
}