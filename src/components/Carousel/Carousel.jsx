import { useEffect, useRef, useState } from "react";
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
import {
  BorderTop,
  DivCarousel,
  DivItens,
  DivTitulo,
  FadeOverlay,
  IconesDiv,
  MainContainer,
  Track,
} from "./styles";

export function Carousel() {
  const icons = [
    { id: 1, element: <AnthropicIcon />, alt: "Anthropic" },
    { id: 2, element: <AwsIcon />, alt: "AWS" },
    { id: 3, element: <FigmaIcon />, alt: "Figma" },
    { id: 4, element: <FireBaseIcon />, alt: "Firebase" },
    { id: 5, element: <DockerIcon />, alt: "Docker" },
    { id: 6, element: <ExpoIcon />, alt: "Expo" },
    { id: 7, element: <GitHubIcon />, alt: "GitHub" },
    { id: 8, element: <JavaScriptIcon />, alt: "JavaScript" },
    { id: 9, element: <QdrantIcon />, alt: "Qdrant" },
    { id: 10, element: <MongoDbIcon />, alt: "MongoDB" },
    { id: 11, element: <OpenAiIcon />, alt: "OpenAI" },
    { id: 12, element: <PhytonIcon />, alt: "Python" },
    { id: 13, element: <PineConeIcon />, alt: "Pinecone" },
    { id: 14, element: <PostgresIcon />, alt: "PostgreSQL" },
    { id: 15, element: <PostManIcon />, alt: "Postman" },
    { id: 16, element: <ReactIcon />, alt: "React" },
    { id: 17, element: <RenderIcon />, alt: "Render" },
    { id: 18, element: <RustIcon />, alt: "Rust" },
    { id: 19, element: <SurrealIcon />, alt: "SurrealDB" },
  ];

  const loopIcons = [...icons, ...icons]; // duplicamos para efeito infinito
  const trackRef = useRef(null);
  const scrollSpeed = 1; // px por frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let requestId;
    const speed = 0.5; // pixels por frame

    const step = () => {
      track.scrollLeft += speed;

      // quando chegar na metade (porque duplicamos os ícones), reset para o início
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }

      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <MainContainer>
      <BorderTop />
      <DivItens>
        <DivTitulo>
          <h2>Tecnologias que usamos</h2>
        </DivTitulo>

        <DivCarousel>
          <FadeOverlay $direction="left" />
          <Track ref={trackRef}>
            {loopIcons.map((i, index) => (
              <IconesDiv key={index} aria-label={i.alt}>
                {i.element}
              </IconesDiv>
            ))}
          </Track>
          <FadeOverlay $direction="right" />
        </DivCarousel>
      </DivItens>
    </MainContainer>
  );
}
