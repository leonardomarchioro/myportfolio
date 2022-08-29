import styled from "styled-components";
import { Input } from "@nextui-org/react";

export const Error = styled.div`
  height: 10px;

  > span {
    font-size: 12px;
    color: #ff0c0c;
  }
`;

export const SInput = styled(Input)<{ error: boolean }>`
  border: 1px solid;
  border-color: ${({ error }) =>
    error ? "#ff0c0c" : ({ theme }) => theme.inputColors.backgroud};
  color: ${({ theme }) => theme.inputColors.placeholder};

  div {
    background-color: ${({ theme }) => theme.inputColors.backgroud};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.inputColors.placeholder};
    font-size: 1rem;
    font-weight: 600;
  }
`;

import { Textarea } from "@nextui-org/react";

export const STextarea = styled(Textarea)<{ error: boolean }>`
  border: 1px solid;
  border-color: ${({ error }) =>
    error ? "#ff0c0c" : ({ theme }) => theme.inputColors.backgroud};
  color: ${({ theme }) => theme.inputColors.placeholder};

  div {
    background-color: ${({ theme }) => theme.inputColors.backgroud};
  }
`;
