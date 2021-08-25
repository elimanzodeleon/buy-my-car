import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  margin: 0 10px;
`;

export const CheckIcon = styled(MdCheck)`
  width: 10em;
  height: 10em;
  margin: 1em 0 2em 0;
  align-self: center;
`;

export const Body = styled.div`
  margin-bottom: 0.5em;
`;

export const CheckboxWrapper = styled.div`
  margin-top: 1em;
`;

export const SectionTitle = styled.label`
  display: inline-block;
  margin-left: 10px;
  font-weight: bold;
`;

export const Link = styled.a`
  color: #0075ff;
`;
