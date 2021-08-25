import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: grid;
  row-gap: 1em;
`;

export const CarDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;

  @media screen and (min-width: 500px) {
    justify-content: space-between;
  }
`;

export const SectionTitle = styled.label`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  font-weight: bold;
`;

export const DetailsSection = styled.div`
  flex-wrap: flex;
  flex-direction: column;
  gap: 0.5em;
  flex: 1 1 auto;
`;

export const TextInput = styled.input<{ error?: boolean }>`
  border: ${props => (props.error ? '1px solid #b00020' : '1px solid #3a3b3c')};
  color: #e4e6eb;
  background-color: #3a3b3c;
  padding: 0.5em 0.75em;
  border-radius: 7px;
  flex: 1 1 1;
  &:focus {
    outline: none;
    border-radius: 5px;
  }

  @media screen and (min-width: 500px) {
    flex: 1 1 auto;
  }
`;

export const TextAreaInput = styled.textarea`
  color: #e4e6eb;
  background-color: #3a3b3c;
  padding: 0.5em 0.75em;
  border: none;
  border-radius: 7px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const DateInput = styled.input<{ error?: boolean }>`
  border: ${props => (props.error ? '4px solid #b00020' : '4px solid white')};

  &:focus {
    outline: none;
  }
`;

export const RadioOptions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
