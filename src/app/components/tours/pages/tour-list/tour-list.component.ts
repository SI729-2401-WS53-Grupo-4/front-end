import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ToursService} from "../../services/tours.service";

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, RouterLink, RouterLinkActive, NgForOf, NgIf],
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent {
  tours = [
    {
      title: 'Coast Tour',
      image: 'https://i0.wp.com/comidasperuanas.com.pe/wp-content/uploads/2023/06/causa-rellena-de-pollo-2.jpg?fit=1900%2C1200&ssl=1',
      guide: 'Andre Rodriguez',
      rating: 4,
      numberOfRatings: 850,
      minPrice: 50,
      currentPeople: 3,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 3,
      itemsIncluded: ['3 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      moreInfoLink: '/tour-info',
      buttonLink: '/tour-payment',
      date: 'Mon, Aug 23, 2024',
      infoDescription: 'En este tour de 3 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 3 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['9:00 AM', '12:00 PM'],
    },
    {
      title: 'Lima Food Tour',
      image: 'https://freewalkingtoursperu.com/wp-content/uploads/2020/06/plaza-de-armas-lima-peru-11.jpg',
      rating: 4.5,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 4,
      buttonLink: '/tour-payment',
      moreInfoLink: '/tour-info',
      guide: 'Andre Rodriguez',
      numberOfRatings: 950,
      minPrice: 50,
      currentPeople: 4,
      itemsIncluded: ['3 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      date: 'Mon, Apr 21, 2024',
      infoDescription: 'En este tour de 4 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 4 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['8:00 AM', '3:00 PM'],
    },
    {
      title: 'Barranco Food Tour',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4Bf6YFaLeWkOSX9xDXbIpOJGSsrkSIChQwegX8ttbIXJQ0Cg8',
      rating: 5,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 5,
      buttonLink: '/tour-payment',
      moreInfoLink: '/tour-info',
      guide: 'Andre Rodriguez',
      numberOfRatings: 1000,
      minPrice: 50,
      currentPeople: 4,
      itemsIncluded: ['3 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      date: 'Mon, Jun 1, 2024',
      infoDescription: 'En este tour de 5 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 2 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['9:00 AM', '1:00 PM'],
    },

  ];
  constructor(private tourService: ToursService, private router: Router) {}

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
