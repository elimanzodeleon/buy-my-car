import styled from 'styled-components';
import { Button } from '../../styles/common.styles';
import { MdAddCircleOutline } from 'react-icons/md';

export const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #3a3b3c;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 500px) {
    max-width: 580px;
  }
`;

export const AddIcon = styled(MdAddCircleOutline)`
  width: 75px;
  height: 75px;
`;

export const ImagePreview = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 500px) {
    max-width: 580px;
  }
`;

export const ImageButton = styled(Button)`
  color: #0075ff;
  border: 1px solid #0075ff;
  background-color: transparent;
`;
