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
  restaurants_2$: Observable<Restaurante[]>;

  constructor(private restaurantsService: RestaurantsService) {
    this.restaurants$ = this.restaurantsService.getRestaurants();
    this.restaurants_2$ = this.restaurantsService.getRestaurants_2();
  }

  ngOnInit() {
    // No necesitas inicializar `restaurants$` aquí porque ya se inicializó en el constructor
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
  cambiarImagen(event: any) {
    var img = event.target as HTMLImageElement;
    if (img && img.src && img.src.includes('favorite.png')) {
      img.src = '/assets/favorite1.png'; // Cambia la imagen a la estrella prendida
    } else if (img && img.src) {
      img.src = '/assets/favorite.png'; // Cambia la imagen a la estrella apagada
    }
  }
}
