import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  justify-items: center;
  font-size: 1.2em;
  border-radius: 7px;
  border: none;
  margin: 0.5em 0;
  padding: 0 0.5em;
  color: #e4e6eb;
  background-color: #0075ff;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const SecondaryButton = styled(Button)`
  color: #0075ff;
  border: 1px solid #0075ff;
  background-color: transparent;
`;

export const NoOutlineButton = styled(Button)`
  color: #0075ff;
  background-color: transparent;
`;

export const BackIcon = styled(MdArrowBack)`
  width: 1em;
  height: 1em;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #3a3b3c;
  margin: 0.5em 0;
`;
