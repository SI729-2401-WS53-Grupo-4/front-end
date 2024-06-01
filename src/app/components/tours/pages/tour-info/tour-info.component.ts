import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ToursService} from "../../services/tours.service";

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
export class TourInfoComponent {
  tour: any;

  constructor(private tourService: ToursService) {}

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
