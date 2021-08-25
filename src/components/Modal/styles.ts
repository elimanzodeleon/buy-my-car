import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModelWrapper = styled.div`
  position: relative;
  background-color: #242526;
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 500px) {
    max-width: 600px;
    height: auto;
    max-height: 500px;
  }

  @media screen and (min-width: 600px) {
    border-radius: 10px;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
`;

export const ModalTitle = styled.h2`
  margin: 10px 0;
  text-align: center;
  color: #0075ff;
`;

export const ModalCloseButton = styled(MdClose)`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalBody = styled.div``;

export const ModalFooter = styled.div``;
