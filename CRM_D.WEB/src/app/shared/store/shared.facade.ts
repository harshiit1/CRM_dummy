import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SharedActions from './shared.actions';
@Injectable({
  providedIn: 'root',
})
export class SharedFacade {
  private store = inject(Store);

  redirectToDashboard() {
    this.store.dispatch(SharedActions.RedirectToDashboard());
  }
  redirectToCustomers() {
    this.store.dispatch(SharedActions.RedirectToCustomers());
  }
  redirectToDocuments() {
    this.store.dispatch(SharedActions.RedirectToDocuments());
  }
  redirectToEmployees() {
    this.store.dispatch(SharedActions.RedirectToEmployees());
  }
  redirectToSaleReport() {
    this.store.dispatch(SharedActions.RedirectToSaleReport());
  }
  redirectToRateChangeReport() {
    this.store.dispatch(SharedActions.RedirectToRateChangeReport());
  }
}
