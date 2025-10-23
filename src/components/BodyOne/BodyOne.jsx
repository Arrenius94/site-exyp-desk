import { BodyOneContainer, DivImg, DivMensagems, LineTop, MainDiv } from "./styles";
import logoBlue from "../../assets/icons-png/Logo Exypdesk Azul.png"

export function BodyOne(){
  return(
    <MainDiv>
      <LineTop/>
      <BodyOneContainer>
        <DivImg>
          <img src={logoBlue} alt="logo azul"/>
        </DivImg>
        <DivMensagems>
          <h1>Quem Somos Nós</h1>    
          <p>Lorem ipsum dolor sit amet consectetur. Pulvinar tristique<br/> lectus cras scelerisque. Semper et dictum eleifend<br/> luctus. In volutpat tris</p>       
        </DivMensagems> 
      </BodyOneContainer>
    </MainDiv>
  )
}