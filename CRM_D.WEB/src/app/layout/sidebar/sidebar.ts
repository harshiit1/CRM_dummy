import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { SharedFacade } from '../../shared/store/shared.facade';
import { map, Subject } from 'rxjs';
import { IUserDetail } from '../../authentication/models/user-detail-model';
import { AuthenticationFacade } from '../../authentication/store/authentication.facade';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent implements OnInit, OnDestroy {
  sidenavCollapsed: boolean = false;
  userData?: IUserDetail;
  destroy$ = new Subject<void>();
  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(
    public sharedFacade: SharedFacade,
    public authFacade: AuthenticationFacade,
  ) {}

  ngOnInit(): void {
    this.subscribeUserDetail();
  }
  toggleSidenav(event: Event) {
    event?.stopPropagation();
    this.sidenavCollapsed = !this.sidenavCollapsed;
    this.collapsedEvent.emit(this.sidenavCollapsed);
  }

  activePage = 'Dashboard';

  menu = [
    { label: 'Dashboard', icon: 'dashboard', page: 'dashboard' },
    { label: 'Customers', icon: 'people', page: 'customers' },
    { label: 'Employees', icon: 'badge', page: 'employees' },
    { label: 'Documents', icon: 'folder_open', page: 'documents' },
    { label: 'Reports', icon: 'bar_chart', page: 'reports' },
    { label: 'Settings', icon: 'settings', page: 'settings' },
  ];

  subscribeUserDetail() {
    this.authFacade.loggedInUserDetail$
      .pipe(
        map((data) => {
          this.userData = data;
          console.log(this.userData);
          return this.userData;
        }),
      )
      .subscribe();
  }

  openDashboardPage() {
    this.sharedFacade.redirectToDashboard();
    this.activePage = 'Dashboard';
  }
  openCustomersPage() {
    this.sharedFacade.redirectToCustomers();
    this.activePage = 'Customers';
  }
  openReportsPage() {
    this.activePage = 'Reports';
  }
  openEmployeesPage() {
    this.sharedFacade.redirectToEmployees();
    this.activePage = 'Employees';
  }
  openSettingsPage() {
    this.activePage = 'Settings';
  }
  openDocumentsPage() {
    this.sharedFacade.redirectToDocuments();
    this.activePage = 'Documents';
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.next();
  }
}
