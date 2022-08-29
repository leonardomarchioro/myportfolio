import { Container, Error, SInput, STextarea } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

export const GeneralInput: React.FC<IProps> = ({
  label,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <SInput
        {...register(name)}
        labelPlaceholder={label}
        {...rest}
        error={!!error}
      />
      <Error>{!!error && <span>{error}</span>}</Error>
    </Container>
  );
};

interface IPropsTextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

export const TextArea: React.FC<IPropsTextarea> = ({
  label,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <STextarea
        labelPlaceholder={label}
        error={!!error}
        {...register(name)}
        {...rest}
      />
      <Error>{!!error && <span>{error}</span>}</Error>
    </Container>
  );
};
