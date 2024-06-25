import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurante } from '../model/restaurante.entity';
import {BaseService} from "../../../public/components/base-service/base.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService extends BaseService<Restaurante>{

  // Endpoint funcionando

  constructor(http: HttpClient) {
    super(http,`${environment.serverBasePath}/restaurant`)
  }

  // Plantilla

  private restaurantSubject = new BehaviorSubject<Restaurante[]>([
    {
      id: 1,
      name: 'Matria Restaurant',
      image: 'https://www.theworlds50best.com/discovery/filestore/jpg/Matria_Food.jpg',
      description: 'Te sorprenderemos con nuestros propios alimentos innovadores y orgánicos de varias zonas del Perú. También tenemos dietas vegetarianas.',
      bookingLink: 'https://www.matriarestaurante.com/'
    },
    {
      id: 2,
      name: 'Awicha',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/85/10/35/magret-de-pato-rostizado.jpg?w=1200&h=-1&s=1',
      description: 'Vive la experiencia de comer a las afueras en una casa barranca de Lima. Sumérgete en esta aventura natural.',
      bookingLink: 'https://www.awicharestaurante.com/'
    },
    {
      id: 3,
      name: 'Maras Restaurant',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/29/13/b7/5a/terraza.jpg',
      description: 'Ofrecemos comida peruana moderna, con sabores típicos y sensaciones nuevas en el público.',
      bookingLink: 'https://www.marriott.com/en-us/hotels/limdt-jw-marriott-hotel-lima/dining/?scid=f2ae0541-1279-4f24-b197-a979c79310b0'
    }
  ]);

  getRestaurants(): Observable<Restaurante[]> {
    return this.restaurantSubject.asObservable();
  }
}
