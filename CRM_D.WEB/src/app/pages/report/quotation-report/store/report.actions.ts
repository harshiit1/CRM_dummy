import { createAction, props } from '@ngrx/store';
import { QuotationReportModel } from '../model/quotation-report-model';

export const GetQuotationReportData = createAction('[Quotation Report] Get Quotation Report Data');
export const GetQuotationReportDataSuccess = createAction(
  '[Sale Report] Get Quotation Report Data Success',
  props<{ response: QuotationReportModel[] }>(),
);
export const GetQuotationReportDataFailure = createAction(
  '[Sale Report] Get Quotation Report Data Failure',
  props<{ error: any }>(),
);
