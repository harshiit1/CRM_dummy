import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CustomerActions from './customer.actions';
@Injectable({
  providedIn: 'root',
})
export class CustomerFacade {
  private store = inject(Store);
  openAddCustomerDialog() {
    this.store.dispatch(CustomerActions.OpenAddCustomerDialog());
  }
}
