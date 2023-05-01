import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule  } from "@angular/common/http";


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { DashboardDetailsComponent } from './components/dashboard-details/dashboard-details.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftSidebarComponent,
    UserListComponent,
    OrderListComponent,
    DashboardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
