import { createAction, props } from '@ngrx/store';
import { SaleReportModel } from '../model/sale-report-model';

export const GetSaleReportData = createAction('[Sale Report] Get Sale Report Data');
export const GetSaleReportDataSuccess = createAction(
  '[Sale Report] Get Sale Report Data Success',
  props<{ response: SaleReportModel[] }>(),
);
export const GetSaleReportDataFailure = createAction(
  '[Sale Report] Get Sale Report Data Failure',
  props<{ error: any }>(),
);
