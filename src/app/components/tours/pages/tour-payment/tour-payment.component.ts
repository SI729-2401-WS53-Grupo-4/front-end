import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ToursService} from "../../services/tours.service";

@Component({
  selector: 'app-tour-payment',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    RouterLinkActive,
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './tour-payment.component.html',
  styleUrl: './tour-payment.component.css'
})
export class TourPaymentComponent {
  tour: any;

  constructor(private tourService: ToursService) {}

  ngOnInit() {
    this.tourService.getTourData().subscribe(data => {
      if (data) {
        this.tour = data;
      } else {
        // Manejar el caso de que no haya datos, quizás redirigiendo o mostrando un mensaje
      }
    });
  }
  protected readonly Array = Array;
  protected readonly Math = Math;
}

