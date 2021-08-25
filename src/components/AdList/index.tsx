import React from 'react';
import * as s from './styles';
import Ad from '../Ad';
import { ICarAd } from '../../interfaces';

interface Props {
  ads: ICarAd[];
}

const AdList: React.FC<Props> = ({ ads }) => {
  console.log(ads);
  return (
    <s.Wrapper>
      <h2>Cars Looking for New Owners</h2>
      {ads.map((ad, idx) => (
        <Ad key={ad.id} ad={ad} />
      ))}
    </s.Wrapper>
  );
};

export default AdList;
