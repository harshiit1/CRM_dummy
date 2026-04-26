import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { CustomerFacade } from '../store/customer.facade';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerListComponent {
  customers = [
    {
      id: 1,
      name: 'Aria Chen',
      email: 'aria.chen@nexwave.io',
      phone: '+1 (415) 234-5678',
      status: 'Active',
      company: '',
      createdDate: new Date('2024-01-12'),
      avatar: 'AC',
    },
    {
      id: 2,
      name: 'Marcus Rivera',
      email: 'm.rivera@stratos.com',
      phone: '+1 (628) 345-6789',
      status: 'Active',
      company: '',
      createdDate: new Date('2024-02-03'),
      avatar: 'MR',
    },
    {
      id: 3,
      name: 'Yuki Tanaka',
      email: 'yuki.t@orbitlabs.dev',
      phone: '+1 (510) 456-7890',
      status: 'Pending',
      company: '',
      createdDate: new Date('2024-02-18'),
      avatar: 'YT',
    },
    {
      id: 4,
      name: 'Priya Nair',
      email: 'priya@quantumleap.ai',
      phone: '+1 (669) 567-8901',
      status: 'Active',
      company: '',
      createdDate: new Date('2024-03-05'),
      avatar: 'PN',
    },
    {
      id: 5,
      name: "Liam O'Sullivan",
      email: 'l.osullivan@vaultco.net',
      phone: '+1 (408) 678-9012',
      status: 'Inactive',
      company: '',
      createdDate: new Date('2024-03-22'),
      avatar: 'LO',
    },
    {
      id: 6,
      name: 'Sofia Andersson',
      email: 'sofia.a@luminos.se',
      phone: '+1 (650) 789-0123',
      status: 'Active',
      company: '',
      createdDate: new Date('2024-04-08'),
      avatar: 'SA',
    },
    {
      id: 7,
      name: 'Kwame Asante',
      email: 'k.asante@brightfield.co',
      phone: '+1 (415) 890-1234',
      status: 'Churned',
      company: '',
      createdDate: new Date('2024-04-15'),
      avatar: 'KA',
    },
    {
      id: 8,
      name: 'Elena Volkov',
      email: 'e.volkov@arcticsys.ru',
      phone: '+1 (510) 901-2345',
      status: 'Active',
      company: '',
      createdDate: new Date('2024-05-01'),
      avatar: 'EV',
    },
    {
      id: 9,
      name: 'Diego Morales',
      email: 'diego.m@solarbit.mx',
      phone: '+1 (628) 012-3456',
      status: 'Pending',
      company: '',
      createdDate: new Date('2024-05-19'),
      avatar: 'DM',
    },
    {
      id: 10,
      name: 'Zara Osei',
      email: 'zara.osei@prismatic.ng',
      phone: '+1 (669) 123-4567',
      status: 'Active',
      company: '',
      createdDate: new Date('2024-06-02'),
      avatar: 'ZO',
    },
    {
      id: 11,
      name: 'Finn Larsen',
      email: 'finn.l@fjordtech.no',
      phone: '+1 (408) 234-5678',
      status: 'Active',
      company: '',
      createdDate: new Date('2024-06-14'),
      avatar: 'FL',
    },
    {
      id: 12,
      name: 'Amara Diallo',
      email: 'amara.d@sahelgroup.sn',
      phone: '+1 (650) 345-6789',
      status: 'Inactive',
      company: '',
      createdDate: new Date('2024-07-01'),
      avatar: 'AD',
    },
  ];

  constructor(public customerFacade: CustomerFacade) {}

  openAddCustomerDialog() {
    this.customerFacade.openAddCustomerDialog();
  }
}
