import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {OrderListComponent} from './components/order-list/order-list.component';
import {DashboardDetailsComponent} from './components/dashboard-details/dashboard-details.component';

const routes: Routes = [
  { path: '', component: DashboardDetailsComponent  },
  { path: 'dashboard', component: DashboardDetailsComponent },
  { path: 'users', component: UserListComponent },
  { path: 'orders', component: OrderListComponent }
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
