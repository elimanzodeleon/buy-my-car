import React from 'react';
import {
  Title,
  Hr,
  Footer,
  Button,
  SecondaryButton,
} from '../../styles/common.styles';
import * as s from './styles';
import { useCarAdContext } from '../../contexts/CarAdContext';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AgreeTOS: React.FC<Props> = ({ setIsModalOpen }) => {
  const { carAdState, carAdDispatch } = useCarAdContext();
  return (
    <s.Wrapper>
      <Title>Terms of Service & Privacy Policy</Title>
      <Hr />
      <s.CheckIcon />
      <s.Body>
        <p>
          By clicking I agree, you agree to BuyMyCar's{' '}
          <s.Link href='https://youtu.be/6xsOrDe2zYM?t=51'>
            Terms of Service
          </s.Link>{' '}
          and{' '}
          <s.Link href='https://youtu.be/8xn1rO1oQmk?t=49'>
            Privacy Policy
          </s.Link>
          .
        </p>
        <s.CheckboxWrapper>
          <input
            type='checkbox'
            checked={carAdState.userAgreed as boolean}
            value='I Agree'
            onChange={() => carAdDispatch({ type: 'TOGGLE_AGREE' })}
            data-testid='agree-tos'
          />
          <s.SectionTitle>I Agree</s.SectionTitle>
        </s.CheckboxWrapper>
      </s.Body>
      <Hr />
      <Footer>
        <SecondaryButton color='primary' onClick={() => setIsModalOpen(false)}>
          cancel
        </SecondaryButton>
        <Button
          onClick={() => carAdDispatch({ type: 'GO_TO_DETAILS_PAGE' })}
          disabled={!carAdState.userAgreed}
          data-testid='agree-tos-next'
        >
          next
        </Button>
      </Footer>
    </s.Wrapper>
  );
};

export default AgreeTOS;
