import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ToursService {
  private tourSubject = new BehaviorSubject<any>(null);
  private toursPagados = new BehaviorSubject<any[]>([]);
  private endpoint = `${environment.serverBasePath}/reserva`;

  constructor(private http: HttpClient) { }

  setTourData(tour: any) {
    this.tourSubject.next(tour);
  }

  getTourData() {
    return this.tourSubject.asObservable();
  }

  getToursPagados():Observable<any[]>{
    return this.http.get<any[]>(this.endpoint);
  }

  addTourPagado(tour:any){
    return this.http.post<any>(this.endpoint,tour);
  }

  deleteTourPagado(id: number): Observable<any>{
    return this.http.delete<any>(`${this.endpoint}/${id}`)
  }
}

