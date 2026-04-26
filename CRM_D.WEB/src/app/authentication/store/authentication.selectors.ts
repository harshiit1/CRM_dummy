import { AuthenticationState } from './authentication.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const AuthenticationSelector = createFeatureSelector<AuthenticationState>('authentication');

export const selectedUserDetail = createSelector(AuthenticationSelector, (state) => {
  return state.userDetail;
});

export const selectedEmpCode = createSelector(AuthenticationSelector, (state) => {
  return state.userDetail?.empCode ?? 0;
});
