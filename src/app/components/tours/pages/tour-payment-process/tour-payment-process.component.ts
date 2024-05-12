import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-tour-payment-process',
  standalone: true,
  imports: [
    MatButton,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './tour-payment-process.component.html',
  styleUrl: './tour-payment-process.component.css'
})
export class TourPaymentProcessComponent {

}
