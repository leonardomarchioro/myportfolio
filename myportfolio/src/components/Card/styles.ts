import { Link, Collapse } from "@nextui-org/react";
import styled from "styled-components";

export const SCollapse = styled(Collapse)`
  background-color: ${({ theme }) => theme.backgroundColors.secondary};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.titleColors.primary};
  font-weight: 600;
  font-size: 2rem;

  @media screen and(max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColors.primary};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.textColors.primary};
  text-indent: 1rem;
  padding: 0.1rem 0;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5rem;
  li {
    background-color: ${({ theme }) => theme.spanBox.background};
    color: ${({ theme }) => theme.spanBox.color};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-weight: 600;
    font-size: 0.8rem;
    margin: 0rem;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 1rem;
`;

export const SLink = styled(Link)`
  color: ${({ theme }) => theme.titleColors.primary};
  display: flex;
  gap: 0.5rem;
`;
