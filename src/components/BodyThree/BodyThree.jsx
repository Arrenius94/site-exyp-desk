import {
  BorderTop,
  CardDiv,
  HeaderDiv,
  IconsDiv,
  LeftTextDiv,
  MainDiv,
  RightTextDiv,
} from "./styles";
import Muda from "../../assets/icons/muda-icon";
import SimboloDev from "../../assets/icons/simbolo-dev";
import Bonecos from "../../assets/icons/bonecos";
import Estrela from "../../assets/icons/estrela";

export function BodyThree() {
  return (
    <MainDiv>
      <BorderTop></BorderTop>
      <HeaderDiv>
        <p>
          Lorem ipsum dolor sit amet consectetur. Pulvinar tristique lectus cras
          <br /> scelerisque. Semper et dictum eleifend luctus. In volutpat
          trist
        </p>
      </HeaderDiv>

      <CardDiv>
        <LeftTextDiv>
          <div>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div>
            <h2></h2>
            <p></p>
          </div>
        </LeftTextDiv>
        <IconsDiv>
          <div>
            <Muda />
          </div>
          <div>
            <SimboloDev />
          </div>
          <div>
            <Bonecos />
          </div>
          <div>
            <Estrela />
          </div>
        </IconsDiv>

        <RightTextDiv>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </RightTextDiv>
      </CardDiv>
    </MainDiv>
  );
}
