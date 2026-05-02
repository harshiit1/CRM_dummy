import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReportState } from './report.reducer';

export const selectReportState = createFeatureSelector<ReportState>('quotationReport');

export const selectQuotationReportData = createSelector(
  selectReportState,
  (state) => state.quotationReport,
);
