import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCard, MatCardModule} from '@angular/material/card';
import {NgOptimizedImage} from "@angular/common";
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [MatDividerModule,RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, NgOptimizedImage],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  cambiarImagen(event: any) {
    var img = event.target as HTMLImageElement;
    if (img && img.src && img.src.includes("favorite.png")) {
      img.src = "/assets/favorite1.png"; // Cambia la imagen a la estrella prendida
    } else if (img && img.src) {
      img.src = "/assets/favorite.png"; // Cambia la imagen a la estrella apagada
    }
  }
}
