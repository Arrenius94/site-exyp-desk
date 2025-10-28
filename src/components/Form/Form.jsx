import {
  BorderTop,
  ContainerInputs,
  ContainerLeft,
  ContainerRight,
  MainContainer,
  WidhtTopDivRight,
} from "./styles";

export function Form() {
  return (
    <MainContainer>
      <BorderTop />
      <ContainerLeft>
        <h2>
          Lorem ipsum dolor sit amet <br /> consectetur. Et enim est.
        </h2>

        <p id="pMargem">
          Lorem ipsum dolor sit amet consectetur. <br />
          Lobortis ligula magna nunc velit rhoncus <br /> aenean in. Suscipit
          facilisi massa magna <br /> lacinia eu. Dui egestas hendrerit mauris{" "}
          <br />
          congue suspendisse. Risus tincidunt nec <br /> mauris donec facilisis
          viverra netus.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur.
          <br />
          Lobortis ligula magna nunc velit rhoncus
        </p>
      </ContainerLeft>

      <ContainerRight>
        <WidhtTopDivRight>
          <div>
            <ContainerInputs>
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Digite aqui..." />
            </ContainerInputs>

            <ContainerInputs>
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Digite aqui..." />
            </ContainerInputs>
          </div>
        </WidhtTopDivRight>
      </ContainerRight>
    </MainContainer>
  );
}
