import {Component, Input, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ToursService} from "../../services/tours.service";
import {RestaurantsService} from "../../../restaurante/services/restaurantes.service";
import {Restaurante} from "../../../restaurante/model/restaurante.entity";

@Component({
  selector: 'app-tour-info',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    RouterLinkActive,
    RouterLink,
    NgIf,
    NgForOf
  ],
  templateUrl: './tour-info.component.html',
  styleUrl: './tour-info.component.css'
})
export class TourInfoComponent implements OnInit {
  tour: any;
  dataRv: Restaurante[] =[];
  restaurantId: number | null = null;

  constructor(private tourService: ToursService, private restaurantService: RestaurantsService) {}

  ngOnInit() {
    this.tourService.getTourData().subscribe(data => {
      if (data) {
        this.tour = data;
        this.restaurantId = data.restaurantId;
        console.log('Tour data:', this.tour);
      } else {
      }
    });
    this.getAllRestaurantsViews()
  }
  private getAllRestaurantsViews(){
    this.restaurantService.getAll().subscribe((response: any) => {
      console.log('Restaurantes:', response);
      this.dataRv = response;
    });
  }
  protected readonly Array = Array;
  protected readonly Math = Math;
}
