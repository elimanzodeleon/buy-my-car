import React, { ReactNode, useRef } from 'react';
import * as s from './styles';

interface Props {
  children: ReactNode;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ children, setIsModalOpen }) => {
  const closeModalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === closeModalRef.current) setIsModalOpen(false);
  };

  return (
    <s.Overlay ref={closeModalRef} onClick={closeModal}>
      <s.ModelWrapper>
        <s.ModalCloseButton onClick={() => setIsModalOpen(false)}>
          x
        </s.ModalCloseButton>
        <s.ModalHeader>
          <s.ModalTitle>BuyMyCar</s.ModalTitle>
        </s.ModalHeader>
        {children}
      </s.ModelWrapper>
    </s.Overlay>
  );
};

export default Modal;
