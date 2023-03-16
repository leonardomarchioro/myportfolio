import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundColors.primary};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.titleColors.secondary};
  font-weight: 600;
  font-size: 2rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.textColors.secondary};
  text-indent: 0.5rem;
`;
