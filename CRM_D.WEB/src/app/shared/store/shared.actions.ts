import { createAction } from '@ngrx/store';

export const RedirectToDashboard = createAction('[Shared] Redirect to Dashboard');

export const RedirectToCustomers = createAction('[Shared] Redirect to Customers');

export const RedirectToDocuments = createAction('[Shared] Redirect to Documents');

export const RedirectToEmployees = createAction('[Shared] Redirect to Employees');

export const RedirectToSaleReport = createAction('[Shared] Redirect to Sale Report');

export const RedirectToQuotationReport = createAction('[Shared] Redirect to Quotation Report');
