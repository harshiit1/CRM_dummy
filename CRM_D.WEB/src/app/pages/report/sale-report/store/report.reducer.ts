import { Action, createReducer, on } from '@ngrx/store';
import * as ReportActions from './report.actions';
import { SaleReportModel } from '../model/sale-report-model';

export const SALE_REPORT_FEATURE_KEY = 'saleReport';

export interface ReportState {
  error: any;
  saleReport?: SaleReportModel[];
}

export const initialState: ReportState = {
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ReportActions.GetSaleReportData, (state) => ({
    ...state,
    saleReport: [],
  })),
  on(ReportActions.GetSaleReportDataSuccess, (state, { response }) => ({
    ...state,
    saleReport: response,
    error: null,
  })),
  on(ReportActions.GetSaleReportDataFailure, (state, { error }) => ({
    ...state,
    error: error,
    saleReport: [],
  })),
);

export function SaleReportReducer(state: ReportState | undefined, action: Action) {
  return reducer(state, action);
}
