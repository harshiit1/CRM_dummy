import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
@Injectable({
  providedIn: 'root',
})
export class DashboardFacade {
  private store = inject(Store);

  openUserDetailDialog() {
    this.store.dispatch(DashboardActions.OpenUserDetailDialog());
  }
}
