import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CustomerReducer from './customer.reducer';

export const selectCustomerState = createFeatureSelector<CustomerReducer.CustomerState>(
  CustomerReducer.CUSTOMER_FEATURE_KEY,
);
