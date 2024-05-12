import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  private tourSubject = new BehaviorSubject<any>(null);

  constructor() { }

  setTourData(tour: any) {
    this.tourSubject.next(tour);
  }

  getTourData() {
    return this.tourSubject.asObservable();
  }
}

