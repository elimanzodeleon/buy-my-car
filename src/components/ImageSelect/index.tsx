import { useEffect, useRef } from 'react';
import { useCarAdContext } from '../../contexts/CarAdContext';
import {
  Wrapper,
  Title,
  Hr,
  Footer,
  BackIcon,
  Button,
  NoOutlineButton,
} from '../../styles/common.styles';
import * as s from './styles';

const ImageSelect = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { carAdState, carAdDispatch } = useCarAdContext();

  useEffect(() => {
    if (carAdState.image) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        carAdDispatch({
          type: 'SET_PREVIEW',
          payload: { preview: fileReader.result as string },
        });
      };
      fileReader.readAsDataURL(carAdState.image);
    } else {
      carAdDispatch({ type: 'REMOVE_PREVIEW' });
    }
  }, [carAdState.image]);

  return (
    <Wrapper>
      <Title>Select image</Title>
      <Hr />
      {carAdState.preview ? (
        <s.ImagePreview
          alt={carAdState.model}
          src={carAdState.preview}
          onClick={() => {
            fileInputRef.current!.click();
          }}
        />
      ) : (
        <s.ImagePreviewContainer
          onClick={e => {
            e.preventDefault();
            fileInputRef.current!.click();
          }}
        >
          <s.AddIcon />
        </s.ImagePreviewContainer>
      )}

      <input
        type='file'
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept='image/*'
        onChange={e => {
          const file: File | null = e.target.files![0];
          if (file && file.type.substr(0, 5) === 'image')
            carAdDispatch({ type: 'SET_IMAGE', payload: { image: file } });
          else carAdDispatch({ type: 'REMOVE_IMAGE' });
        }}
        data-testid='image-select'
      />
      <Hr />
      <Footer>
        <NoOutlineButton
          onClick={() => carAdDispatch({ type: 'GO_TO_DETAILS_PAGE' })}
        >
          <BackIcon />
        </NoOutlineButton>
        {carAdState.image ? (
          <s.ImageButton
            onClick={e => {
              carAdDispatch({ type: 'REMOVE_IMAGE' });
            }}
          >
            remove image
          </s.ImageButton>
        ) : (
          <s.ImageButton
            onClick={e => {
              e.preventDefault();
              fileInputRef.current!.click();
            }}
          >
            add image
          </s.ImageButton>
        )}

        <Button
          onClick={() => carAdDispatch({ type: 'GO_TO_CONFIRMATION_PAGE' })}
          disabled={!carAdState.preview}
          data-testid='image-select-next'
        >
          next
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default ImageSelect;
