import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedModule } from '../shared-module/shared-module';

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

const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 1,
    name: 'Aria Chen',
    email: 'aria.chen@nexwave.io',
    phone: '+1 (415) 234-5678',
    status: 'Active',
    createdDate: new Date('2024-01-12'),
    avatar: 'AC',
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    email: 'm.rivera@stratos.com',
    phone: '+1 (628) 345-6789',
    status: 'Active',
    createdDate: new Date('2024-02-03'),
    avatar: 'MR',
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    email: 'yuki.t@orbitlabs.dev',
    phone: '+1 (510) 456-7890',
    status: 'Pending',
    createdDate: new Date('2024-02-18'),
    avatar: 'YT',
  },
  {
    id: 4,
    name: 'Priya Nair',
    email: 'priya@quantumleap.ai',
    phone: '+1 (669) 567-8901',
    status: 'Active',
    createdDate: new Date('2024-03-05'),
    avatar: 'PN',
  },
  {
    id: 5,
    name: "Liam O'Sullivan",
    email: 'l.osullivan@vaultco.net',
    phone: '+1 (408) 678-9012',
    status: 'Inactive',
    createdDate: new Date('2024-03-22'),
    avatar: 'LO',
  },
  {
    id: 6,
    name: 'Sofia Andersson',
    email: 'sofia.a@luminos.se',
    phone: '+1 (650) 789-0123',
    status: 'Active',
    createdDate: new Date('2024-04-08'),
    avatar: 'SA',
  },
  {
    id: 7,
    name: 'Kwame Asante',
    email: 'k.asante@brightfield.co',
    phone: '+1 (415) 890-1234',
    status: 'Churned',
    createdDate: new Date('2024-04-15'),
    avatar: 'KA',
  },
  {
    id: 8,
    name: 'Elena Volkov',
    email: 'e.volkov@arcticsys.ru',
    phone: '+1 (510) 901-2345',
    status: 'Active',
    createdDate: new Date('2024-05-01'),
    avatar: 'EV',
  },
  {
    id: 9,
    name: 'Diego Morales',
    email: 'diego.m@solarbit.mx',
    phone: '+1 (628) 012-3456',
    status: 'Pending',
    createdDate: new Date('2024-05-19'),
    avatar: 'DM',
  },
  {
    id: 10,
    name: 'Zara Osei',
    email: 'zara.osei@prismatic.ng',
    phone: '+1 (669) 123-4567',
    status: 'Active',
    createdDate: new Date('2024-06-02'),
    avatar: 'ZO',
  },
  {
    id: 11,
    name: 'Finn Larsen',
    email: 'finn.l@fjordtech.no',
    phone: '+1 (408) 234-5678',
    status: 'Active',
    createdDate: new Date('2024-06-14'),
    avatar: 'FL',
  },
  {
    id: 12,
    name: 'Amara Diallo',
    email: 'amara.d@sahelgroup.sn',
    phone: '+1 (650) 345-6789',
    status: 'Inactive',
    createdDate: new Date('2024-07-01'),
    avatar: 'AD',
  },
];

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

// ─── Component ─────────────────────────────────────────────────────────────────

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
  dataSource = new MatTableDataSource<Customer>(MOCK_CUSTOMERS);

  // ── Notification mock ──────────────────────────────────────────────────────
  notifications = [
    { icon: 'person_add', message: 'New customer registered', time: '2m ago' },
    { icon: 'assignment', message: 'Project "Apollo" updated', time: '14m ago' },
    { icon: 'attach_money', message: 'Invoice #4821 paid ($12,400)', time: '1h ago' },
    { icon: 'warning', message: 'Server latency spike detected', time: '3h ago' },
  ];
  notifCount = this.notifications.length;

  // ── Lifecycle ──────────────────────────────────────────────────────────────
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Custom filter predicate
    this.dataSource.filterPredicate = (data: Customer, filter: string) => {
      const str = (data.name + data.email + data.phone + data.status).toLowerCase();
      return str.includes(filter);
    };
  }

  // ── Actions ────────────────────────────────────────────────────────────────
  toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearSearch(): void {
    this.searchValue = '';
    this.dataSource.filter = '';
  }

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
