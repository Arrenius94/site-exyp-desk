import {
  GreyDiv,
  ImageRightDiv,
  LeftDiv,
  LenteDiv,
  LineMid,
  LineTop,
  LinkMid,
  MainDiv,
  RightDiv,
  TitleDiv,
} from "./styles";
import ArrowLeft from "../../assets/icons/seta-blue";
export function BodyTwo() {
  return (
    <MainDiv>
      <LineTop />
      <LeftDiv>
        <TitleDiv>
          <span>Lorem ipsum dolor sit amet consectetur.</span>.
          <p>
            Nunc nulla fermentum amet ridiculus adipiscing eleifend ut. Quam in
            est etiam vitae faucibus. Amet faucibus consectetur vel at eleifend
            egestas. Id tortor justo felis condimentum egestas quisque tortor
            vel. Volutpat morbi vel nisl aenean. Porta dolor cras eu eu dictum
            amet. Molestie id sed a ac. Sodales.
          </p>
        </TitleDiv>
        <LinkMid>
          <a href="#">Lorem ipsum dolor sit amet.</a>
          <ArrowLeft />
        </LinkMid>
      </LeftDiv>
      <LineMid />

      <RightDiv>
       <ImageRightDiv>
        <LenteDiv>
          <GreyDiv></GreyDiv>
        </LenteDiv>
       </ImageRightDiv>
      </RightDiv>
     
    </MainDiv>
  );
}
