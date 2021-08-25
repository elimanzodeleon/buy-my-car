import React from 'react';
import * as s from './styles';
import { ICarAd } from '../../interfaces';

interface Props {
  ad: ICarAd;
}

const Ad: React.FC<Props> = ({ ad }) => {
  return (
    <s.Wrapper>
      <s.AdHeader>
        <s.CarImage src={ad.preview as string} alt={ad.model} />
        <s.CarDetails>
          <p>{`${ad.year} ${ad.make} ${ad.model}`}</p>
          <p>{ad.newOrUsed}</p>
          <p>{`Transmission: ${ad.autoOrManual}`}</p>
          <p>{`Condition:  ${ad.condition} / 10`}</p>
          <p>{`Ad posted: ${ad.date}`}</p>
        </s.CarDetails>
      </s.AdHeader>
      <div>
        <p>{ad.description}</p>
      </div>
    </s.Wrapper>
  );
};

export default Ad;
