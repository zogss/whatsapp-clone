import { UserInfoType } from '~/shared/types';
import { StateReducerType, StateType } from './state.interface';

export const initialState: StateType = {
  userInfo: {} as UserInfoType,
  newUser: false,
};

const reducer: StateReducerType = (state, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'SET_NEW_USER':
      return {
        ...state,
        newUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
