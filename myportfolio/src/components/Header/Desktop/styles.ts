import { Navbar } from "@nextui-org/react";
import styled from "styled-components";

export const NavBarRoot = styled(Navbar)`
  background-color: ${({ theme }) => theme.backgroundColors.general} !important;
  width: 100%;
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

export const ContainerLinks = styled(Navbar.Item)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 2rem;
  padding: 0;
  div {
    width: 2rem;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const Navigate = styled(Navbar.Item)`
  > button {
    background-color: ${({ theme }) => theme.spanBox.background};
    color: ${({ theme }) => theme.spanBox.color};
    height: 2rem;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const NavContent = styled(Navbar.Content)`
  ul {
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 1rem 0;
  }
`;
