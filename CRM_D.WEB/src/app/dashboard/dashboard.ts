import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedModule } from '../shared/shared-module';
import { IUserDetail } from '../authentication/models/user-detail-model';
import { map, take } from 'rxjs';
import { AuthenticationFacade } from '../authentication/store/authentication.facade';
import { DashboardFacade } from './store/dashboard.facade';

// Angular Material Imports

// ─── Interfaces ────────────────────────────────────────────────────────────────

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Churned';
  createdDate: Date;
  avatar: string;
}

export interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: string;
  color: string;
}

export interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
  active?: boolean;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────


const METRIC_CARDS: MetricCard[] = [
  {
    title: 'Total Customers',
    value: '12,847',
    change: '+8.2%',
    changeType: 'up',
    icon: 'group',
    color: 'indigo',
  },
  {
    title: 'Total Employees',
    value: '348',
    change: '+3.1%',
    changeType: 'up',
    icon: 'badge',
    color: 'cyan',
  },
  {
    title: 'Active Projects',
    value: '94',
    change: '-2.4%',
    changeType: 'down',
    icon: 'rocket_launch',
    color: 'amber',
  },
  {
    title: 'Revenue',
    value: '$2.41M',
    change: '+14.7%',
    changeType: 'up',
    icon: 'trending_up',
    color: 'emerald',
  },
];

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', route: '/dashboard', active: true },
  { label: 'Customers', icon: 'group', route: '/customers', badge: 3 },
  { label: 'Employees', icon: 'badge', route: '/employees' },
  { label: 'Reports', icon: 'bar_chart', route: '/reports' },
  { label: 'Documents', icon: 'folder_open', route: '/documents', badge: 7 },
  { label: 'Settings', icon: 'settings', route: '/settings' },
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // ── State ──────────────────────────────────────────────────────────────────
  sidenavOpen = true;
  searchValue = '';
  currentDate = new Date();

  // ── Data ───────────────────────────────────────────────────────────────────
  metricCards = METRIC_CARDS;
  navItems = NAV_ITEMS;
  displayedColumns: string[] = ['avatar', 'name', 'email', 'phone', 'status', 'createdDate'];

  userData?: IUserDetail;

  notifications = [
    { icon: 'person_add', message: 'New customer registered', time: '2m ago' },
    { icon: 'assignment', message: 'Project "Apollo" updated', time: '14m ago' },
    { icon: 'attach_money', message: 'Invoice #4821 paid ($12,400)', time: '1h ago' },
    { icon: 'warning', message: 'Server latency spike detected', time: '3h ago' },
  ];
  notifCount = this.notifications.length;
  constructor(
    public authFacade: AuthenticationFacade,
    public dashboardFacade: DashboardFacade,
  ) {}

  ngOnInit(): void {
    this.subscribeUserDetail();
    if (this.userData?.isFirstLogin) {
      this.dashboardFacade.openUserDetailDialog();
    }
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    // // Custom filter predicate
    // this.dataSource.filterPredicate = (data: Customer, filter: string) => {
    //   const str = (data.name + data.email + data.phone + data.status).toLowerCase();
    //   return str.includes(filter);
    // };
  }
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
  toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }

  // applyFilter(event: Event): void {
  //   const value = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = value.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // clearSearch(): void {
  //   this.searchValue = '';
  //   this.dataSource.filter = '';
  // }

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }

  trackByNav(_: number, item: NavItem): string {
    return item.route;
  }

  trackByCard(_: number, card: MetricCard): string {
    return card.title;
  }
}
