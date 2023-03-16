import { Loading } from "@nextui-org/react";
import styled from "styled-components";

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