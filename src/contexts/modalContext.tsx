'use client';

import React, { useContext, useReducer, createContext } from 'react';

interface ModalState {
  contact: boolean;
}

export enum ModalActionEnum {
  OPEN_CONTACT = 'OPEN_CONTACT',
  CLOSE_CONTACT = 'CLOSE_CONTACT',
}

type ModalAction = { type: 'OPEN_CONTACT' } | { type: 'CLOSE_CONTACT' };

const initialState: ModalState = {
  contact: false,
};

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionEnum.OPEN_CONTACT:
      return { ...state, contact: true };
    case ModalActionEnum.CLOSE_CONTACT:
      return { ...state, contact: false };
    default:
      return state;
  }
};

const ModalContext = createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalAction>;
} | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  return <ModalContext.Provider value={{ state, dispatch }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
