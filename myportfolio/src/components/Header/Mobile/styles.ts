import { Link, Navbar } from "@nextui-org/react";
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

export const Figure = styled.figure`
  width: 3rem;
`;

export const Navigate = styled(Navbar.CollapseItem)`
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.backgroundColors.primary};
  padding: 0.5rem 1rem;
  cursor: pointer;
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

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.titleColors.primary};
  font-weight: 500;
`;
