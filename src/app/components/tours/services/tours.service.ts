import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  private tourSubject = new BehaviorSubject<any>(null);
  private toursPagados = new BehaviorSubject<any[]>([]);
  toursPagados$ = this.toursPagados.asObservable();

  constructor() { }

  setTourData(tour: any) {
    this.tourSubject.next(tour);
  }

  getTourData() {
    return this.tourSubject.asObservable();
  }

  addTourPagado(tour:any){
    const currentTours = this.toursPagados.value;
    this.toursPagados.next([...currentTours, tour]);
  }
}

