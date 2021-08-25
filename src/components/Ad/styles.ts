import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 10px;
  background-color: #242526;
  width: 100%;

  @media screen and (min-width: 700px) {
    border-radius: 10px;
  }
`;

export const AdHeader = styled.div`
  display: flex;
  gap: 1em;
`;

export const CarImage = styled.img`
  display: block;
  object-fit: cover;
  width: 50%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  flex-grow: 1 1 auto;
`;

export const CarDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;
