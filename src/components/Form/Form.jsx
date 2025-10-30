import { useState } from "react";
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

import emailjs from '@emailjs/browser';
const templateId = "template_g5lg1mh";
const serviceId = "service_u91ag4x";
const publicKey = "2JNGkcP-Ki9-WYxdd";

export function Form() {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // You can apply formatting later
  const [message, setMessage] = useState("");

 
  const resetInputs = () => {
    setName('');
    setCargo('');
    setCompany('');
    setIndustry('');
    setEmail('');
    setPhone('');
    setMessage('');
  }


  const handleSubmit = async () => {

    try {
      await emailjs.send(
        templateId,
        serviceId,
        {
          full_name: name,
          role: cargo,
          company: company,
          market: industry,
          email: email,
          phone: phone,
          message: message,
        },
        { publicKey: publicKey }
      );
      alert('Mensagem enviada com sucesso!');
      resetInputs();
    } catch (err) {
      console.error(err);
      alert('Falha ao enviar. Tente novamente.');
    }
  };

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
              <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Digite aqui..." />
            </ContainerInputs>

            <ContainerInputs>
              <label htmlFor="">Cargo</label>
              <input type="text" onChange={(e) => setCargo(e.target.value)} value={cargo} placeholder="Digite aqui..." />
            </ContainerInputs>
          </FormLinha>

          <FormLinha>
            <ContainerInputs>
              <label htmlFor="">Nome da empresa</label>
              <input type="text" onChange={(e) => setCompany(e.target.value)} value={company} placeholder="Digite aqui..." />
            </ContainerInputs>

            <ContainerInputs>
              <label htmlFor="">Mercado</label>
              <input type="text" onChange={(e) => setIndustry(e.target.value)} value={industry} placeholder="Digite aqui..." />
            </ContainerInputs>
          </FormLinha>

          <FormLinha>
            <ContainerInputs>
              <label htmlFor="">E-mail</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Digite aqui..." />
            </ContainerInputs>

            <ContainerInputs>
              <label htmlFor="">Telefone</label>
              <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Digite aqui..." />
            </ContainerInputs>
          </FormLinha>

          <DivTextArea>
            <textarea name="" onChange={(e) => setMessage(e.target.value)} value={message} rows={4} placeholder="Fale sobre o projeto..." id="">

            </textarea>
          </DivTextArea>

         <DivButton onClick={() => handleSubmit()}>
          <button>Enviar</button>  
         </DivButton> 

        </WidhtTopDivRight>
      </ContainerRight>
    </MainContainer>
  );
}
