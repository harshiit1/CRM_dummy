import { AuthenticationReducer } from './authentication/store/authentication.reducer';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AuthenticationEffects } from './authentication/store/authentication.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { DashboardEffects } from './dashboard/store/dashboard.effects';
import { UserEffects } from './user/store/user.effects';
import { UserReducer } from './user/store/user.reducer';
import { CustomerEffects } from './pages/customer/store/customer.effects';
import { SharedEffects } from './shared/store/shared.effects';
import * as SaleReportEffects from './pages/report/sale-report/store/report.effects';
import { SaleReportReducer } from './pages/report/sale-report/store/report.reducer';
import { QuotationReportReducer } from './pages/report/quotation-report/store/report.reducer';
import * as QuotationReportEffects from './pages/report/quotation-report/store/report.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      authentication: AuthenticationReducer,
      user: UserReducer,
      saleReport: SaleReportReducer,
      quotationReport: QuotationReportReducer,
    }),
    provideEffects([
      AuthenticationEffects,
      DashboardEffects,
      UserEffects,
      CustomerEffects,
      SharedEffects,
      SaleReportEffects.ReportEffects,
      QuotationReportEffects.ReportEffects,
    ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
