import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'authentication/signin', pathMatch: 'full' },
  {
    path: 'authentication',
    children: [
      {
        path: 'signin',
        loadComponent: () =>
          import('./authentication/sign-in/sign-in').then((m) => m.SignInComponent),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./authentication/sign-up/sign-up').then((m) => m.SignUpComponent),
      },
    ],
  },
  {
    path: 'crm',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('./pages/customer/customer-list/customer-list').then(
            (m) => m.CustomerListComponent,
          ),
      },
      {
        path: 'employees',
        loadComponent: () =>
          import('./pages/employee/employee-list/employee-list').then(
            (m) => m.EmployeeListComponent,
          ),
      },
      {
        path: 'documents',
        loadComponent: () =>
          import('./pages/document/upload-document/upload-document').then(
            (m) => m.UploadDocumentComponent,
          ),
      },
    ],
  },
];
