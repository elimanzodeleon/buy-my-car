import React from 'react';
import { nanoid } from 'nanoid';
import {
  Wrapper,
  Title,
  Hr,
  Button,
  SecondaryButton,
  Footer,
} from '../../styles/common.styles';
import { useCarAdContext } from '../../contexts/CarAdContext';
import { ICarAd } from '../../interfaces';
import Ad from '../Ad';

interface Props {
  ads: ICarAd[];
  setAds: React.Dispatch<React.SetStateAction<ICarAd[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdConfirmation: React.FC<Props> = ({ ads, setAds, setIsModalOpen }) => {
  const { carAdState, carAdDispatch } = useCarAdContext();

  const handlePublish = () => {
    // push ad to ads array
    setAds(prev => [carAdState, ...prev]);
    // close modal
    setIsModalOpen(false);
    // reset carAdState
    carAdDispatch({ type: 'RESET_AD', payload: { id: nanoid() } });
  };

  return (
    <Wrapper>
      <Title>Confirm your ad</Title>
      <Hr />
      <Ad ad={carAdState} />
      <Hr />
      <Footer>
        <SecondaryButton
          onClick={() => carAdDispatch({ type: 'GO_TO_DETAILS_PAGE' })}
        >
          edit
        </SecondaryButton>
        <Button onClick={handlePublish} data-testid='publish-ad'>
          Publish
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default AdConfirmation;
