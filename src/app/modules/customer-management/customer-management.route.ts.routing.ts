import { Routes, RouterModule } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { ModuleWithProviders } from '@angular/core';

export const customerManagementRoutes: Routes = [
  {
    path: 'new',
    component: CustomerRegistrationComponent
  },
];

//export const CustomerManagement: any.route: any.tsRoutes = RouterModule.forChild(routes);
//export const CustomerManagement: ModuleWithProviders = RouterModule.forChild(routes);
