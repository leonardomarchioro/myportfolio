import { Spacer } from "@nextui-org/react";

import { SButton, SContainer, SForm, STitle } from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GeneralInput, TextArea } from "../Inputs";

interface IContact {
  name?: string;
  email?: string;
  message?: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Formato de email inválido"),
  message: yup.string().required("Campo obrigatório"),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEmail = (data: IContact) => {
    console.log(data);
  };

  return (
    <SForm onSubmit={handleSubmit(handleEmail)}>
      <STitle>Contato</STitle>
      <GeneralInput
        label="Nome"
        register={register}
        name={"name"}
        error={errors.name?.message}
      />
      <GeneralInput
        label="Email"
        register={register}
        name={"email"}
        error={errors.email?.message}
      />
      <Spacer />
      <TextArea
        label="Mensagem"
        register={register}
        name={"message"}
        error={errors.message?.message}
      />
      <SContainer>
        <SButton color="success" type="submit">
          Enviar
        </SButton>
      </SContainer>
    </SForm>
  );
};

export default ContactForm;
