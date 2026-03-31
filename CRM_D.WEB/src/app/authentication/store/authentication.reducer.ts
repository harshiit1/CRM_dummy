import { createReducer, on } from '@ngrx/store';
// import * as AuthenticationActions from './authentication.actions';

export const authenticationFeatureKey = 'authentication';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
