import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {ToursService} from "../../services/tours.service";
import {TourListComponent} from "../tour-list/tour-list.component";

@Component({
  selector: 'app-tour-payment-process',
  standalone: true,
  imports: [
    MatButton,
    RouterLinkActive,
    RouterLink,
    MatCardImage,
    MatCard,
    MatCardContent,
    MatCardHeader
  ],
  templateUrl: './tour-payment-process.component.html',
  styleUrl: './tour-payment-process.component.css'
})
export class TourPaymentProcessComponent {
  tour: any;

  constructor(private tourService: ToursService, private router:Router) {}

  pagar(){
    this.tourService.addTourPagado({title: this.tour.title,
      image: this.tour.image,
      duration: this.tour.duration,
      price: this.tour.price})
      .subscribe(() => {
    });
  }

  ngOnInit() {
    this.tourService.getTourData().subscribe(data => {
      if (data) {
        this.tour = data;
      } else {
      }
    });
  }
  protected readonly Array = Array;
  protected readonly Math = Math;
}
