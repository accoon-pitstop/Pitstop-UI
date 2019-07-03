import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { RouterModule } from '@angular/router';
import { customerManagementRoutes } from './customer-management.route.ts.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customerManagementRoutes)
  ],
  declarations: [CustomerRegistrationComponent]
})
export class CustomerManagementModule { }
