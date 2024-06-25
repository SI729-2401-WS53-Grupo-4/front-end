import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {OnInit} from "@angular/core";
import {ToursService} from "../../services/tours.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Tour} from "../../model/tour.entity";
import {RestaurantsService} from "../../../restaurante/services/restaurantes.service";
import {Restaurante} from "../../../restaurante/model/restaurante.entity";

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, RouterLink, RouterLinkActive, NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit{

  dataT: Tour[] =[];
  dataRv: Restaurante[] =[];

  tours: any[] = [
    {
      titleTour: 'Coast Food Tour',
      imageTour: 'https://i0.wp.com/comidasperuanas.com.pe/wp-content/uploads/2023/06/causa-rellena-de-pollo-2.jpg?fit=1900%2C1200&ssl=1',
      instructor: 'Andre Rodriguez',
      rating: 4,
      numberOfRatings: 900,
      minPrice: 50,
      currentPeople: 3,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 3,
      itemsIncluded: ['3 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      moreInfoLink: '/tour-info',
      buttonLink: '/tour-payment',
      date: 'Mon, Aug 23, 2024',
      description: 'En este tour de 3 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 3 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['9:00 AM', '12:00 PM'],
      hours: ['3 horas'],
      titleRestaurant: ['Matria Restaurant'],
      imageRestaurant: ['https://www.theworlds50best.com/discovery/filestore/jpg/Matria_Food.jpg']
    },
    {
      titleTour: 'Lima Food Tour',
      imageTour: 'https://freewalkingtoursperu.com/wp-content/uploads/2020/06/plaza-de-armas-lima-peru-11.jpg',
      rating: 4.5,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 4,
      buttonLink: '/tour-payment',
      moreInfoLink: '/tour-info',
      instructor: 'Andre Rodriguez',
      numberOfRatings: 950,
      minPrice: 50,
      currentPeople: 4,
      itemsIncluded: ['3 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      date: 'Mon, Apr 21, 2024',
      description: 'En este tour de 4 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 4 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['8:00 AM', '3:00 PM'],
      hours: ['4 horas'],
      titleRestaurant: ['Awicha'],
      imageRestaurant: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/85/10/35/magret-de-pato-rostizado.jpg?w=1200&h=-1&s=1']
    },
    {
      titleTour: 'Barranco Food Tour',
      imageTour: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4Bf6YFaLeWkOSX9xDXbIpOJGSsrkSIChQwegX8ttbIXJQ0Cg8',
      rating: 5,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 5,
      buttonLink: '/tour-payment',
      moreInfoLink: '/tour-info',
      instructor: 'Andre Rodriguez',
      numberOfRatings: 1000,
      minPrice: 50,
      currentPeople: 4,
      itemsIncluded: ['3 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      date: 'Mon, Jun 1, 2024',
      description: 'En este tour de 5 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 2 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['9:00 AM', '1:00 PM'],
      hours: ['5 horas'],
      titleRestaurant: ['Maras Restaurant'],
      imageRestaurant: ['https://media-cdn.tripadvisor.com/media/photo-s/29/13/b7/5a/terraza.jpg']
    }
  ];
  constructor(private tourService: ToursService, private router: Router, private fb:FormBuilder) {
  }

  private getAllTours(){
    this.tourService.getAll().subscribe((response: any) => {
      this.dataT = response;
    })
  }

  ngOnInit() {
    this.getAllTours();
  }

  onMoreInfo(tour: any) {
    this.tourService.setTourData(tour);
    this.router.navigate(['/tour-info']);
  }

  onBookNow(tour: any) {
    this.tourService.setTourData(tour);
    this.router.navigate(['/tour-payment']);
  }
  protected readonly Array = Array;
  protected readonly Math = Math;
}
