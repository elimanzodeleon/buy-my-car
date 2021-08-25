import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  @media screen and (min-width: 700px) {
    padding: 1em 0;
  }
`;

export const Title = styled.h3`
  color: #0075ff;
`;
