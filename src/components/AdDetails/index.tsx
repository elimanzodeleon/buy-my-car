import React, { useState } from 'react';
import { useCarAdContext } from '../../contexts/CarAdContext';
import {
  Wrapper,
  Title,
  Button,
  NoOutlineButton,
  BackIcon,
  Footer,
  Hr,
} from '../../styles/common.styles';
import * as s from './styles';
import { Errors } from '../../interfaces';

const AdDetails = () => {
  const { carAdState, carAdDispatch } = useCarAdContext();
  const [errors, setErrors] = useState<Errors>({} as Errors);

  const handleTextChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const field = e.target.name;
    const value = e.target.value;

    // check for error in year input
    if (
      field === 'year' &&
      (!Number(value) ||
        Number(value) < 1900 ||
        Number(value) > new Date().getFullYear() + 1)
    ) {
      setErrors({
        ...errors,
        year: 'Invalid year entered',
      });
    } else {
      delete errors.year;
    }

    // check for error in todays date input
    if (field === 'date') {
      const [year, month, day] = value.split('-');

      const date = new Date();
      const currYear = date.getFullYear();
      const currMonth = date.getMonth() + 1;
      const currDay = date.getDate();
      if (
        Number(year) !== currYear ||
        Number(month) !== currMonth ||
        Number(day) !== currDay
      ) {
        setErrors({
          ...errors,
          date: 'Please enter todays date',
        });
      } else {
        delete errors.date;
      }
    }
    carAdDispatch({
      type: 'HANDLE_INPUT',
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const handleSliderChange = (e: any) => {
    carAdDispatch({
      type: 'HANDLE_INPUT',
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const nextIsDisabled =
    !carAdState.make ||
    !carAdState.model ||
    !carAdState.year ||
    !carAdState.description ||
    !carAdState.date ||
    Object.keys(errors).length > 0;

  return (
    <Wrapper>
      <Title>Ad details</Title>
      <Hr />
      <s.FormWrapper>
        <s.CarDetails data-testid='car-type'>
          <s.TextInput
            type='text'
            name='make'
            value={carAdState.make}
            onChange={e => handleTextChange(e)}
            placeholder='Make'
          />
          <s.TextInput
            type='text'
            name='model'
            value={carAdState.model}
            onChange={e => handleTextChange(e)}
            placeholder='Model'
          />
          <s.TextInput
            type='text'
            name='year'
            error={!!errors && !!errors.year}
            value={carAdState.year}
            onChange={e => handleTextChange(e)}
            placeholder='Year'
          />
        </s.CarDetails>
        <s.TextAreaInput
          name='description'
          placeholder='Tell us more about that whip.'
          rows={3}
          value={carAdState.description}
          onChange={e => handleTextChange(e)}
          data-testid='car-description'
        />
        <s.CarDetails>
          <s.DetailsSection>
            <s.SectionTitle htmlFor='date'>Today's date</s.SectionTitle>
            <s.DateInput
              type='date'
              id='date'
              name='date'
              error={!!errors && !!errors.date}
              value={carAdState.date}
              onChange={e => handleTextChange(e)}
              data-testid='date-today'
            />
          </s.DetailsSection>
          <s.DetailsSection>
            <s.SectionTitle htmlFor='new-used'>New or Used</s.SectionTitle>
            <select
              name='newOrUsed'
              id='new-used'
              value={carAdState.newOrUsed}
              onChange={e => handleTextChange(e)}
              data-testid='select-new'
            >
              <option value='used'>Used</option>
              <option value='new'>{'New [< 2k miles]'}</option>
            </select>
          </s.DetailsSection>
          <s.DetailsSection>
            <s.SectionTitle>Transmission</s.SectionTitle>
            <s.RadioOptions>
              <div>
                <input
                  type='radio'
                  value='automatic'
                  name='autoOrManual'
                  checked={carAdState.autoOrManual === 'automatic'}
                  onChange={e => handleTextChange(e)}
                />
                Automatic
              </div>
              <div>
                <input
                  type='radio'
                  value='manual'
                  name='autoOrManual'
                  checked={carAdState.autoOrManual === 'manual'}
                  onChange={e => handleTextChange(e)}
                />
                Manual
              </div>
            </s.RadioOptions>
          </s.DetailsSection>
        </s.CarDetails>
        <s.DetailsSection>
          <s.SectionTitle>
            Condition{' '}
            <span style={{ color: '#0075ff' }}>{carAdState.condition}</span>
          </s.SectionTitle>
          <input
            type='range'
            style={{ display: 'block', width: '100%', margin: 'auto' }}
            min={1}
            max={10}
            name='condition'
            value={carAdState.condition}
            onChange={e => handleSliderChange(e)}
            data-testid='condition-slider'
          />
        </s.DetailsSection>
      </s.FormWrapper>
      <Hr />

      <Footer>
        <NoOutlineButton
          onClick={() => carAdDispatch({ type: 'GO_TO_AGREE_PAGE' })}
        >
          <BackIcon />
        </NoOutlineButton>
        <Button
          onClick={() => carAdDispatch({ type: 'GO_TO_IMAGE_PAGE' })}
          disabled={nextIsDisabled}
          data-testid='ad-details-next'
        >
          next
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default AdDetails;
