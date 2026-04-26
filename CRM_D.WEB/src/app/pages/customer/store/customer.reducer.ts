import { Action, createReducer } from '@ngrx/store';

export const CUSTOMER_FEATURE_KEY = 'customer';

export interface CustomerState {}

export const initialState: CustomerState = {};

export const reducer = createReducer(initialState);

export function CustomerReducer(state: CustomerState | undefined, action: Action) {
  return reducer(state, action);
}
