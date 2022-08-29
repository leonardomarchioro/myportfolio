import styled from "styled-components";
import { Input, Textarea, Button } from "@nextui-org/react";

export const SForm = styled.form`
  background-color: ${({ theme }) => theme.backgroundColors.primary};

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding: 3rem;

  label {
    color: ${({ theme }) => theme.inputColors.placeholder};
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const STitle = styled.h2`
  color: ${({ theme }) => theme.titleColors.secondary};
`;

export const SInput = styled(Input)`
  div {
    background-color: ${({ theme }) => theme.inputColors.backgroud};
  }
`;

export const STextarea = styled(Textarea)`
  div {
    background-color: ${({ theme }) => theme.inputColors.backgroud};
  }
`;

export const SButton = styled(Button)`
  background-color: ${({ theme }) => theme.buttonColors.background};
  color: ${({ theme }) => theme.buttonColors.color};
  display: flex;
  width: 5rem;
  font-weight: 600;
`;

export const SContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
