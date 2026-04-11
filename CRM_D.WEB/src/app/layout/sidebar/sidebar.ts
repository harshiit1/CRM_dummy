import { Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
import { SharedFacade } from '../../shared/store/shared.facade';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  sidenavCollapsed: boolean = false;
  @Output() collapsedEvent = new EventEmitter<boolean>();
  constructor(public sharedFacade: SharedFacade) {}

  toggleSidenav(event: Event) {
    event?.stopPropagation();
    this.sidenavCollapsed = !this.sidenavCollapsed;
    this.collapsedEvent.emit(this.sidenavCollapsed);
  }

  openDashboardPage() {
    this.sharedFacade.redirectToDashboard();
  }
  openCustomersPage() {
    this.sharedFacade.redirectToCustomers();
  }
  openReportsPage() {}
  openEmployeesPage() {}
  openSettingsPage() {}
  openDocumentsPage() {}
}
