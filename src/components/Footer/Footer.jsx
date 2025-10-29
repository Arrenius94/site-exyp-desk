import {
  ContainerLeft,
  ContainerLinks,
  ContainerRight,
  ContentContainer,
  DivLightBar,
  DivPadding,
  DivShadow,
  IconeContainer,
  LightBar,
  LogoContainer,
  MainContainer,
} from "./Styles";
import LogoBranco from "../../assets/icons-png/Logo Exypdesk Branco.png";
import Twitter from "../../assets/icons-png/logo-twitter.png";
import Instagram from "../../assets/icons-png/logo-instagram.png";
import FaceBook from "../../assets/icons-png/logo-facebook.png";
import Linkdln from "../../assets/icons-png/logo-linkedln.png";

export function Footer() {
  return (
    <MainContainer>
      <DivPadding>
        <ContentContainer>
          <ContainerLeft>
            <LogoContainer>
              <img src={LogoBranco} alt="logo-branca" />
              <p>Exypdesk</p>
            </LogoContainer>

            <IconeContainer>
              <img src={Twitter} alt="Twitter-logo" />
              <img src={Instagram} alt="Instagram-logo" />
              <img src={FaceBook} alt="Facebook-logo" />
              <img src={Linkdln} alt="Linkdln-logo" />
            </IconeContainer>
          </ContainerLeft>

          <ContainerRight>
            <ContainerLinks>
              <p id="titulo">Produto</p>
              <p>Baixar</p>
              <p>Status</p>
              <p>Diretório de Apps</p>
            </ContainerLinks>

            <ContainerLinks>
              <p id="titulo">Empresa</p>
              <p>Sobre</p>
              <p>Marca</p>
              <p>Lançamentos</p>
            </ContainerLinks>

            <ContainerLinks>
              <p id="titulo">Política</p>
              <p>Termos</p>
              <p>Privacidade</p>
              <p>Configurações de cookies</p>
              <p>Diretrizes</p>
              <p>Licenças</p>
              <p>Informações da empresa</p>
            </ContainerLinks>
          </ContainerRight>
        </ContentContainer>

        <DivLightBar>
          <LightBar />
          <DivShadow />
        </DivLightBar>
      </DivPadding>
    </MainContainer>
  );
}
