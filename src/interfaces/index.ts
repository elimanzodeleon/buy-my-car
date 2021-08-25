import React from 'react';

export interface Errors {
  year?: string;
  date?: string;
}

export interface ICarAdCreation extends ICarAd {
  userAgreed: Boolean;
  currPage: number;
}

export interface ICarAdContext {
  carAdState: ICarAdCreation;
  carAdDispatch: React.Dispatch<ACTION_TYPE>;
}

export interface ICarAd {
  id: string;
  make: string;
  model: string;
  year: string;
  description: string;
  date: string;
  newOrUsed: string;
  condition: number;
  image: File | null;
  autoOrManual: string;
  preview: string | null; // ONLY PRESENT FOR TESTING PURPOSES SINCE WE ARE NOT PERSISTING OUR ADS
}

export type ACTION_TYPE =
  | {
      type: 'HANDLE_INPUT';
      payload: { field: string; value: string | number };
    }
  | {
      type: 'GO_TO_AGREE_PAGE';
    }
  | {
      type: 'GO_TO_DETAILS_PAGE';
    }
  | {
      type: 'GO_TO_IMAGE_PAGE';
    }
  | {
      type: 'GO_TO_CONFIRMATION_PAGE';
    }
  | {
      type: 'TOGGLE_AGREE';
    }
  | {
      type: 'SET_IMAGE';
      payload: { image: File | null };
    }
  | {
      type: 'REMOVE_IMAGE';
    }
  | {
      type: 'SET_PREVIEW';
      payload: { preview: string };
    }
  | {
      type: 'REMOVE_PREVIEW';
    }
  | {
      type: 'RESET_AD';
      payload: {
        id: string;
      };
    };
