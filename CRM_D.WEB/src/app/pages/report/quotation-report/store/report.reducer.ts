import { Action, createReducer, on } from '@ngrx/store';
import * as ReportActions from './report.actions';
import { QuotationReportModel } from '../model/quotation-report-model';

export const QUOTATION_REPORT_FEATURE_KEY = 'quotationReport';

export interface ReportState {
  error: any;
  quotationReport?: QuotationReportModel[];
}

export const initialState: ReportState = {
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ReportActions.GetQuotationReportData, (state) => ({
    ...state,
    quotationReport: [],
  })),
  on(ReportActions.GetQuotationReportDataSuccess, (state, { response }) => ({
    ...state,
    quotationReport: response,
    error: null,
  })),
  on(ReportActions.GetQuotationReportDataFailure, (state, { error }) => ({
    ...state,
    error: error,
    quotationReport: [],
  })),
);

export function QuotationReportReducer(state: ReportState | undefined, action: Action) {
  return reducer(state, action);
}
