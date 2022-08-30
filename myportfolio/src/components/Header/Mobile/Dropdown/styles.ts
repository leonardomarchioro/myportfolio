import { Navbar } from "@nextui-org/react";
import styled from "styled-components";

export const ContainerLinks = styled(Navbar.CollapseItem)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  div {
    width: 3rem;
  }
`;
