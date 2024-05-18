import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurante } from '../model/restaurante.entity';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private restaurantSubject = new BehaviorSubject<Restaurante[]>([
    {
      title: 'Matria Restaurant',
      image: 'https://www.theworlds50best.com/discovery/filestore/jpg/Matria_Food.jpg',
      description: 'Te sorprenderemos con nuestros propios alimentos innovadores y orgánicos de varias zonas del Perú. También tenemos dietas vegetarianas.',
      bookingLink: 'https://www.matriarestaurante.com/'
    },
    {
      title: 'Awicha',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/85/10/35/magret-de-pato-rostizado.jpg?w=1200&h=-1&s=1',
      description: 'Vive la experiencia de comer a las afueras en una casa barranca de Lima. Sumérgete en esta aventura natural.',
      bookingLink: '/restaurant-booking'
    },
    {
      title: 'Maras Restaurant',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/29/13/b7/5a/terraza.jpg',
      description: 'Ofrecemos comida peruana moderna, con sabores típicos y sensaciones nuevas en el público.',
      bookingLink: '/restaurant-booking'
    }
  ]);
  private restaurantSubject_2 = new BehaviorSubject<Restaurante[]>([
    {
      title: 'Xoma Gastronómico',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/63/96/1d/minimalismo-en-restauracion.jpg?w=1200&h=-1&s=1',
      description: 'Restaurante refinado y elegante que ofrece cocina tradicional con un toque moderno, además de cocteles y vino.',
      bookingLink: '/restaurant-booking'
    },
    {
      title: 'Osaka Pardo y Aliaga',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9d/92/de/iluminacion-calida-influencia.jpg?w=1200&h=-1&s=1',
      description: 'Cadena de comedores con gastronomía sofisticada en la que se ofrece cocina fusión asiática y peruana y cocteles.',
      bookingLink: '/restaurant-booking'
    },
    {
      title: 'La Vista Restaurant',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/54/65/66/en-la-vista-puedes-pasar.jpg?w=1200&h=-1&s=1',
      description: 'Descubra la deliciosa comida peruana y disfrute de las extraordinarias vistas al océano Pacífico en una de las mejores opciones gastronómicas de Lima.',
      bookingLink: '/restaurant-booking'
    }
  ])
  constructor() { }

  getRestaurants(): Observable<Restaurante[]> {
    return this.restaurantSubject.asObservable();
  }
  getRestaurants_2(): Observable<Restaurante[]> {
    return this.restaurantSubject_2.asObservable();
  }
}
