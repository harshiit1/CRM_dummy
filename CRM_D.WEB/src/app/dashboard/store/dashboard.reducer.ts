import { createFeature, createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';

export const dashboardFeatureKey = 'dashboard';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);

export const dashboardFeature = createFeature({
  name: dashboardFeatureKey,
  reducer,
});
