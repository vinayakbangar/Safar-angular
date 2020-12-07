import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';
import { SignupComponent } from './components/signup/signup.component';
import { TicketStatusComponent } from './components/ticket-status/ticket-status.component';

const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"login",component:LoginComponent},
                        {path:"signup",component:SignupComponent},
                        {path:"ticket_status",component:TicketStatusComponent},
                        {path:"dashboard",component:DashboardComponent},
                        {path:"admin",component:AdminComponent},
                        {path:"seatselection",component:SeatselectionComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
