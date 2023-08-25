import { UserInfoType } from '~/shared/types';

export type StateType = {
  userInfo: UserInfoType;
  newUser: boolean;
};

export type StateActionType =
  | {
      type: 'SET_USER_INFO';
      payload: UserInfoType;
    }
  | {
      type: 'SET_NEW_USER';
      payload: boolean;
    };

export type StateReducerType = (
  state: StateType,
  action: StateActionType
) => StateType;
