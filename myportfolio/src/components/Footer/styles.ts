import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.footer`
  background-color: #1f1f1f;
  height: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 2rem;
`;

export const Text = styled.span`
  color: #ffffff;
`;

export const ScroolTop = styled(Link)`
  > svg {
    color: #000000;
  }
  background-color: #f2f2f2;
  border-radius: 50%;
  padding: 0.5rem;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
