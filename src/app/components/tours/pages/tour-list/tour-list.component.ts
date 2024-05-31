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

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, RouterLink, RouterLinkActive, NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit{
  tours: any[] = [
    {
      title: 'Coast Food Tour',
      image: 'https://i0.wp.com/comidasperuanas.com.pe/wp-content/uploads/2023/06/causa-rellena-de-pollo-2.jpg?fit=1900%2C1200&ssl=1',
      guide: 'Andre Rodriguez',
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
      infoDescription: 'En este tour de 3 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 3 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['9:00 AM', '12:00 PM'],
      hours: ['3 horas'],
      titleRestaurant: ['Matria Restaurant'],
      imageRestaurant: ['https://www.theworlds50best.com/discovery/filestore/jpg/Matria_Food.jpg']
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
      hours: ['4 horas'],
      titleRestaurant: ['Awicha'],
      imageRestaurant: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/85/10/35/magret-de-pato-rostizado.jpg?w=1200&h=-1&s=1']
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
      hours: ['5 horas'],
      titleRestaurant: ['Maras Restaurant'],
      imageRestaurant: ['https://media-cdn.tripadvisor.com/media/photo-s/29/13/b7/5a/terraza.jpg']
    },
  ]
  tours2: any[] = [
    {
      title: 'Selva Food Tour',
      image: 'https://picchutravel.com/wp-content/uploads/puerto-maldonado.jpg',
      guide: 'Ariana Rodriguez',
      rating: 5,
      numberOfRatings: 1000,
      minPrice: 50,
      currentPeople: 10,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 2,
      itemsIncluded: ['2 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      moreInfoLink: '/tour-info',
      buttonLink: '/tour-payment',
      date: 'Mon, Oct 05, 2024',
      infoDescription: 'En este tour de 2 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 3 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['9:00 AM', '11:00 PM'],
      hours: ['2 horas'],
      titleRestaurant: ['Xoma Gastronómico'],
      imageRestaurant: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/63/96/1d/minimalismo-en-restauracion.jpg?w=1200&h=-1&s=1']
    },
    {
      title: 'Tumbes Food Tour',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/84/d8/23/excelente-ambiente.jpg?w=600&h=400&s=1',
      rating: 3.5,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 3,
      buttonLink: '/tour-payment',
      moreInfoLink: '/tour-info',
      guide: 'Juan Rodriguez',
      numberOfRatings: 850,
      minPrice: 50,
      currentPeople: 4,
      itemsIncluded: ['4 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      date: 'Mon, Jun 15, 2024',
      infoDescription: 'En este tour de 4 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 4 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['8:00 AM', '3:00 PM'],
      hours: ['4 horas'],
      titleRestaurant: ['Osaka Pardo y Aliaga'],
      imageRestaurant: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9d/92/de/iluminacion-calida-influencia.jpg?w=1200&h=-1&s=1']
    },
    {
      title: 'Sierra Food Tour',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/29/2b/2c/50/caption.jpg',
      rating: 4,
      maxPeople: 12,
      language: 'Ingles/Español',
      duration: 6,
      buttonLink: '/tour-payment',
      moreInfoLink: '/tour-info',
      guide: 'Ariana Rodriguez',
      numberOfRatings: 900,
      minPrice: 50,
      currentPeople: 9,
      itemsIncluded: ['3 Visitas a mercados locales', 'Degustacion de la comida peruana', 'Aprender sobre la cultura gastronomica peruana', 'Realizar una caminata en el centro de Lima','Aprender sobre recetas', 'Clases de cocina'],
      date: 'Mon, Jun 1, 2024',
      infoDescription: 'En este tour de 5 horas, aprenderás sobre la historia de la comida peruana, la cultura gastronómica y la cocina peruana. Visitaremos 2 mercados locales y degustaremos la comida peruana. También aprenderás a cocinar platos peruanos y disfrutarás de una caminata por el centro de Lima.',
      times: ['9:00 AM', '1:00 PM'],
      hours: ['5 horas'],
      titleRestaurant: ['La Vista Restaurant'],
      imageRestaurant: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/54/65/66/en-la-vista-puedes-pasar.jpg?w=1200&h=-1&s=1']
    },
  ];
  filteredTours:any[]=[];
  searchForm: FormGroup = this.fb.group({
    searchText: [''],
    searchFilter: ['duration']
  });
  constructor(private tourService: ToursService, private router: Router, private fb:FormBuilder) {}

  ngOnInit() {
    this.filteredTours=[...this.tours];
    console.log('Initial tours:', this.tours);
    console.log('Initial filtered tours:', this.filteredTours);
  }

  onSearch(): void{
    const{searchText, searchFilter}= this.searchForm.value;
    console.log('Search Text:', searchText);
    console.log('Search Filter:', searchFilter);
    let filtered=[...this.tours];
    if (searchText){
      filtered = filtered.filter(tour =>tour.title.toLowerCase().includes(searchText.toLowerCase()));
    }
    if (searchFilter === 'duration') {
      filtered.sort((a, b) => a.duration - b.duration);
    } else if (searchFilter === 'alfabeth') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    this.filteredTours = filtered;
    console.log('Filtered Tours:', this.filteredTours);
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
