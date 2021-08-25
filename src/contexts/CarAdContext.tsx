import React, { createContext, useContext, ReactNode, useReducer } from 'react';
import { nanoid } from 'nanoid';
import carAdReducer from '../reducers/carAdReducer';
import { ICarAdCreation, ICarAdContext, ACTION_TYPE } from '../interfaces';

interface Props {
  children: ReactNode;
}

export const carAdInitialState: ICarAdCreation = {
  id: nanoid(),
  userAgreed: false,
  preview: null,
  currPage: 0,
  make: '',
  model: '',
  year: '',
  description: '',
  date: '',
  newOrUsed: 'used',
  condition: 1,
  image: null,
  autoOrManual: 'automatic',
};

const CarAdContext = createContext<ICarAdContext>({} as ICarAdContext);

const CarAdProvider: React.FC<Props> = ({ children }) => {
  const [carAdState, carAdDispatch] = useReducer(
    carAdReducer,
    carAdInitialState
  );
  return (
    <CarAdContext.Provider value={{ carAdState, carAdDispatch }}>
      {children}
    </CarAdContext.Provider>
  );
};

export const useCarAdContext = () => useContext(CarAdContext);

export default CarAdProvider;
