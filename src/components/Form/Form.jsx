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

const SERVICE_ID = (import.meta.env.VITE_SERVICE_ID || '').trim();
const TEMPLATE_ID = (import.meta.env.VITE_TEMPLATE_ID || '').trim();
const PUBLIC_KEY  = (import.meta.env.VITE_PUBLIC_KEY || '').trim();

// Inicializa o EmailJS uma vez
if (PUBLIC_KEY) {
  emailjs.init({ publicKey: PUBLIC_KEY });
}

export function Form() {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

function formatTelefoneBR(input = "") {
  const digits = String(input).replace(/\D/g, "");

  // remove código do país se presente
  let n = digits;
  if (n.startsWith("55") && n.length > 11) n = n.slice(2);

  const startsWithZero = n.startsWith("0");    
  const maxLen = startsWithZero ? 12 : 11;        
  const d = n.slice(0, maxLen);
  if (!d) return "";

  const dddLen = startsWithZero ? 3 : 2;
  const ddd = d.slice(0, dddLen);
  const rest = d.slice(dddLen);

  // digitação progressiva
  if (d.length <= dddLen) return `(${ddd})`;
  if (rest.length <= 4) return `(${ddd}) ${rest}`;

  // 8 dígitos (fixo): XXXX-XXXX
  if (rest.length === 8) return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;

  // 9 dígitos (móvel): 9XXXX-XXXX
  if (rest.length >= 9) return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;

  // 5–7 dígitos (parcial)
  return `(${ddd}) ${rest.slice(0, rest.length - 4)}-${rest.slice(-4)}`;
}

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
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS config ausente', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      alert('Falha na configuração de e-mail. Tente mais tarde.');
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,   // service_id primeiro
        TEMPLATE_ID,  // template_id depois
        {
          full_name: name,
          role: cargo,
          company: company,
          market: industry,
          email: email,
          phone: phone,
          message: message,
        }
      );
      alert('Mensagem enviada com sucesso!');
      resetInputs();
    } catch (err) {
      console.error('Erro EmailJS:', err);
      alert(err?.text || 'Falha ao enviar. Tente novamente.');
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
              <input onChange={(e) => setPhone(formatTelefoneBR(e.target.value))} value={phone} placeholder="Digite aqui..." />
            </ContainerInputs>
          </FormLinha>

          <DivTextArea>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              rows={4}
              placeholder="Fale sobre o projeto..."
            />
          </DivTextArea>

          <DivButton onClick={handleSubmit}>
            <button>Enviar</button>
          </DivButton>
        </WidhtTopDivRight>
      </ContainerRight>
    </MainContainer>
  );
}