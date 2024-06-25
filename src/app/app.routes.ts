import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TourInfoComponent} from "./components/tours/pages/tour-info/tour-info.component";
import { ProfileInputsComponent } from "./components/profile/components/profile-inputs/profile-inputs.component";
import {EditProfileComponent} from "./components/profile/components/edit-profile/edit-profile.component";
import { PlanOptionsComponent } from "./components/plan/components/plan-options/plan-options.component";
import { TourPaymentComponent} from "./components/tours/pages/tour-payment/tour-payment.component";
import { TourListComponent } from "./components/tours/pages/tour-list/tour-list.component";
import { TourPaymentConfirmComponent } from "./components/tours/pages/tour-payment-confirm/tour-payment-confirm.component";
import { TourPaymentProcessComponent } from "./components/tours/pages/tour-payment-process/tour-payment-process.component";
import { TourPaymentDeniedComponent} from "./components/tours/pages/tour-payment-denied/tour-payment-denied.component";
import { RestaurantListComponent} from "./components/restaurante/page/restaurant-list/restaurant-list.component";
import { PlanConfirmComponent} from "./components/plan/components/plan-confirm/plan-confirm.component";
import {LoginComponent} from "./components/authentication/login/login.component";
import {RegisterComponent} from "./components/authentication/register/register.component";
import {BookingComponent} from "./components/booking/components/pages/booking.component";
import {MainLayoutComponent} from "./public/components/main-layout/main-layout.component";
import {PaymentMethodComponent} from "./components/profile/components/payment-method/payment-method.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'', component:MainLayoutComponent,
    children: [
      {path:'home', component:HomeComponent},
      {path:'tour-info', component:TourInfoComponent},
      {path:'tour-payment',component:TourPaymentComponent},
      {path:'tour-list', component:TourListComponent},
      {path:'tour-payment-confirm',component:TourPaymentConfirmComponent},
      {path:'tour-payment-process',component:TourPaymentProcessComponent},
      {path:'tour-payment-denied',component:TourPaymentDeniedComponent},

      {path:'restaurant-list',component:RestaurantListComponent},

      {path:'profile', component:ProfileInputsComponent},
      {path:'edit-profile', component:EditProfileComponent},
      {path:'plan-options', component:PlanOptionsComponent},
      {path:'plan-confirm', component:PlanConfirmComponent},
      {path:'payment-method',component:PaymentMethodComponent},
      {path:'booking', component:BookingComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
