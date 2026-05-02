import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReportState } from './report.reducer';

export const selectReportState = createFeatureSelector<ReportState>('saleReport');

export const selectSaleReportData = createSelector(selectReportState, (state) => state.saleReport);
