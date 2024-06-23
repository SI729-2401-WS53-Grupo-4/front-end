import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BaseService} from "../../../public/components/base-service/base.service";
import {Tour} from "../model/tour.entity";
@Injectable({
  providedIn: 'root'
})
export class ToursService extends BaseService<Tour>{
  private tourSubject = new BehaviorSubject<any>(null);

  constructor(http: HttpClient) {
    super(http,`${environment.serverBasePath}/tour`)
  }

  setTourData(tour: any) {
    this.tourSubject.next(tour);
  }

  getTourData() {
    return this.tourSubject.asObservable();
  }

}

