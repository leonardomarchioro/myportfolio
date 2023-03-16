import { Loading } from "@nextui-org/react";
import styled from "styled-components";

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

export const SContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    background-color: ${({ theme }) => theme.buttonColors.background.secondary};
    color: ${({ theme }) => theme.buttonColors.color.secondary};
    width: 5rem;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    button {
      width: 100%;
    }
  }
`;

export const SLoading = styled(Loading)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1080;
  opacity: 0.8;
  background-color: #000;
  cursor: wait;

  i {
    background-color: #FFF;

  }
`;
