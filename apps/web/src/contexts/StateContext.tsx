import { Dispatch, createContext, useContext, useReducer } from 'react';
import {
  StateActionType,
  StateReducerType,
  StateType,
} from '~/reducers/state/state.interface';

type StateContextPropsType = {
  initialState: StateType;
  reducer: StateReducerType;
  children: React.ReactNode;
};

type StateContextReturnType = [StateType, Dispatch<StateActionType>];

export const StateContext = createContext<StateContextReturnType>(
  {} as StateContextReturnType
);

export const StateProvider = ({
  initialState,
  reducer,
  children,
}: StateContextPropsType) => {
  //* reducers
  const [state, dispatch] = useReducer<StateReducerType>(reducer, initialState);

  //* render
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
