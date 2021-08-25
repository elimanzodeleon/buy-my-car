import styled from 'styled-components';

export const App = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  width: 100%;
  margin: auto;
  @media screen and (min-width: 500px) {
    max-width: 700px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
