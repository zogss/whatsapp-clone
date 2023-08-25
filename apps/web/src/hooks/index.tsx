'use client';
import React, { PropsWithChildren } from 'react';
import { StateProvider } from '~/contexts/StateContext';
import reducer, { initialState } from '~/reducers/state/state.reducer';

const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <StateProvider reducer={reducer} initialState={initialState}>
    {children}
  </StateProvider>
);

export default Providers;
