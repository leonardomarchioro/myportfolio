import styled from "styled-components";
import { Card } from "@nextui-org/react";

export const ContainerTechs = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundColors.secondary};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.titleColors.primary};
  font-weight: 600;
  font-size: 2rem;
`;

export const SCard = styled(Card)`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgroundColors.general};

  svg {
    width: 80%;
    height: 80%;
    color: ${({ theme }) => theme.titleColors.primary};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`;
