import React from 'react';
import { Button } from '../../styles/common.styles';
import * as s from './styles';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ setIsModalOpen }) => {
  return (
    <s.NavWrapper>
      <s.Title>BuyMyCar</s.Title>
      <Button
        onClick={() => setIsModalOpen(true)}
        data-testid='main-nav-toggle'
      >
        Create Ad
      </Button>
    </s.NavWrapper>
  );
};

export default Navbar;
