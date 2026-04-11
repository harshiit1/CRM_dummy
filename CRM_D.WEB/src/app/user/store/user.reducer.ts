import { Action, createFeature, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface UserState {}

export const initialState: UserState = {};

export const reducer = createReducer(initialState);

export function UserReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
