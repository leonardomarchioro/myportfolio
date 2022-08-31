import { Collapse } from "@nextui-org/react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundColors.general};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.titleColors.primary};
  font-weight: 600;
  font-size: 2rem;
`;

export const GroupContainer = styled(Collapse.Group)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;
