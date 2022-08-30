import { Navbar } from "@nextui-org/react";
import styled from "styled-components";

export const NavBarRoot = styled(Navbar)`
  background-color: ${({ theme }) => theme.backgroundColors.general} !important;
  > div {
    background-color: ${({ theme }) =>
      theme.backgroundColors.general} !important;

    > button > div {
      span {
        background-color: ${({ theme }) =>
          theme.titleColors.primary} !important;
      }
    }
  }
`;

export const ContainerLinks = styled(Navbar.CollapseItem)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 1rem;
  padding: 0;
  div {
    width: 3rem;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const Navigate = styled(Navbar.CollapseItem)`
  color: ${({ theme }) => theme.titleColors.primary};
  font-weight: 500;
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.backgroundColors.primary};
  padding: 0.5rem 1rem;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

export const CollapseContent = styled(Navbar.Collapse)`
  ul {
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
`;
