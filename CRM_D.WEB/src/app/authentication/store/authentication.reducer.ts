import { Action, createReducer, on } from '@ngrx/store';
import { IUserDetail } from '../models/user-detail-model';
import * as AuthenticationActions from './authentication.actions';

export const AUTHENTICATION_FEATURE_KEY = 'authentication';

export interface AuthenticationState {
  error: any;
  userDetail?: IUserDetail;
}

export const initialState: AuthenticationState = {
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthenticationActions.LoginUser, (state) => ({
    ...state,
  })),
  on(AuthenticationActions.LoginUserSuccess, (state, { response }) => ({
    ...state,
    userDetail: response,
  })),
  on(AuthenticationActions.LoginUserFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
);

export function AuthenticationReducer(state: AuthenticationState | undefined, action: Action) {
  return reducer(state, action);
}
