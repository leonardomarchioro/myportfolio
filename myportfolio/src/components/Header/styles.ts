import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  .Desktop {
    display: none;
  }

  @media screen and (min-width: 924px) {
    .Desktop {
      display: flex;
    }

    .Mobile {
      display: none;
    }
  }
`;
