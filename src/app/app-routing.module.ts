import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: FooterComponent
  },
  {
    path: 'customers',
    loadChildren: './modules/customer-management/customer-management.module#CustomerManagementModule',
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
