import {
  BtnInputBlue,
  ButtonOpacity,
  DivGap,
  DivInputBtn,
  Divisoria,
  FirstDivSectionLeft,
  InputEmail,
  LogoExypDesk,
  MainContainer,
  SecondDivSectionLeft,
  SectionLeft,
  SectionRight,
} from "./styles";
import LogoCinza from "../../assets/icons-png/Logo Exypdesk Grande.png";
import SetaDireitaSvg from "../../assets/icons/seta-direita";

export function Hero() {
  return (
    <MainContainer>
      <SectionLeft>
        <DivGap>
          <FirstDivSectionLeft>
            <h1>To be Present</h1>
            <p>Menos tarefas, mais momentos</p>
          </FirstDivSectionLeft>

          <SecondDivSectionLeft>
            <DivInputBtn>
              <InputEmail type="email" placeholder="Digite seu e-mail" />
              <BtnInputBlue>Entrar em contato</BtnInputBlue>
            </DivInputBtn>

            <Divisoria />
            <ButtonOpacity>
              Conheça nosso trabalho
              <SetaDireitaSvg />
            </ButtonOpacity>
          </SecondDivSectionLeft>
        </DivGap>
      </SectionLeft>

      <SectionRight>
        <LogoExypDesk src={LogoCinza} />
      </SectionRight>
    </MainContainer>
  );
}
