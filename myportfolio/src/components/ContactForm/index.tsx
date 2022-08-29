import { Spacer } from "@nextui-org/react";

import {
  SButton,
  SContainer,
  SForm,
  SInput,
  STextarea,
  STitle,
} from "./styles";

const ContactForm: React.FC = () => {
  return (
    <SForm>
      <STitle>Contato</STitle>
      <SInput labelPlaceholder="Nome" />
      <SInput labelPlaceholder="Email" type="email" />
      <Spacer />
      <STextarea labelPlaceholder="Mensagem" />
      <SContainer>
        <SButton>Enviar</SButton>
      </SContainer>
    </SForm>
  );
};

export default ContactForm;
