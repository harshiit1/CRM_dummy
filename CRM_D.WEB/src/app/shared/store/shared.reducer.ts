import { createFeature, createReducer, on } from '@ngrx/store';

export const sharedFeatureKey = 'shared';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
);

export const sharedFeature = createFeature({
  name: sharedFeatureKey,
  reducer,
});
