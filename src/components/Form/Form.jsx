import {
  BorderTop,
  ContainerInputs,
  ContainerLeft,
  ContainerRight,
  DivButton,
  DivTextArea,
  FormLinha,
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
          <FormLinha>
            <ContainerInputs>
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Digite aqui..." />
            </ContainerInputs>

            <ContainerInputs>
              <label htmlFor="">Cargo</label>
              <input type="text" placeholder="Digite aqui..." />
            </ContainerInputs>
          </FormLinha>

          <FormLinha>
            <ContainerInputs>
              <label htmlFor="">Nome da empresa</label>
              <input type="text" placeholder="Digite aqui..." />
            </ContainerInputs>

            <ContainerInputs>
              <label htmlFor="">Mercado</label>
              <input type="text" placeholder="Digite aqui..." />
            </ContainerInputs>
          </FormLinha>

          <FormLinha>
            <ContainerInputs>
              <label htmlFor="">E-mail</label>
              <input type="email" placeholder="Digite aqui..." />
            </ContainerInputs>

            <ContainerInputs>
              <label htmlFor="">Telefone</label>
              <input type="number" placeholder="Digite aqui..." />
            </ContainerInputs>
          </FormLinha>

          <DivTextArea>
            <textarea name="" rows={4} placeholder="Fale sobre o projeto..." id="">

            </textarea>
          </DivTextArea>

         <DivButton>
          <button>Enviar</button>  
         </DivButton> 

        </WidhtTopDivRight>
      </ContainerRight>
    </MainContainer>
  );
}
