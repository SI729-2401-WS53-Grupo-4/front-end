import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurantes.service';
import { Restaurante } from '../../model/restaurante.entity';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterLink } from '@angular/router'; // Asegúrate de tener RouterLink
import { MatIconModule } from '@angular/material/icon'; // Asegúrate de tener MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Asegúrate de tener MatButtonModule
import { MatToolbarModule } from '@angular/material/toolbar'; // Asegúrate de tener MatToolbarModule
import { MatCardModule } from '@angular/material/card'; // Asegúrate de tener MatCardModule
import { NgOptimizedImage } from '@angular/common'; // Asegúrate de tener NgOptimizedImage

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [
    CommonModule, // Agrega CommonModule aquí
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    NgOptimizedImage
  ],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants$: Observable<Restaurante[]>;
  dataR: Restaurante[]= [];

  constructor(private restaurantsService: RestaurantsService) {
    this.restaurants$ = this.restaurantsService.getRestaurants();
  }

  private getAllRestaurants(){
     this.restaurantsService.getAll().subscribe((response: any) =>{
       this.dataR = response;
     })
  }

  ngOnInit() {
    this.getAllRestaurants();
  }
  redirectToBooking(url:string):void{
    window.location.href=url;
  }
  openLinkInNewTab() {
    const activeElement = document.activeElement as HTMLElement | null;
    if (activeElement) {
      const link = activeElement.getAttribute('routerLink');
      if (link) {
        window.open(link, '_blank');
      }
    }
  }
}
