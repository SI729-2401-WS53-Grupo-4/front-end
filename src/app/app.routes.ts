import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';import { TourInfoComponent} from "./components/tours/pages/tour-info/tour-info.component";
import { ProfileInputsComponent } from "./components/profile/components/profile-inputs/profile-inputs.component";
import { PlanOptionsComponent } from "./components/plan/components/plan-options/plan-options.component";
import { TourPaymentComponent} from "./components/tours/pages/tour-payment/tour-payment.component";
import { TourListComponent } from "./components/tours/pages/tour-list/tour-list.component";
import { TourPaymentConfirmComponent } from "./components/tours/pages/tour-payment-confirm/tour-payment-confirm.component";
import { TourPaymentProcessComponent } from "./components/tours/pages/tour-payment-process/tour-payment-process.component";
import { RestaurantListComponent} from "./components/restaurante/page/restaurant-list/restaurant-list.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
export const routes: Routes = [
  {path:'home', component:HomeComponent},

  {path:'tour-info', component:TourInfoComponent},
  {path:'tour-payment',component:TourPaymentComponent},
  {path:'tour-list', component:TourListComponent},
  {path:'tour-payment-confirm',component:TourPaymentConfirmComponent},
  {path:'tour-payment-process',component:TourPaymentProcessComponent},

  {path:'restaurant-list',component:RestaurantListComponent},

  {path:'profile', component:ProfileInputsComponent},
  {path:'plan-options', component:PlanOptionsComponent},
  { path: '', redirectTo: 'tour-list', pathMatch: 'full' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
