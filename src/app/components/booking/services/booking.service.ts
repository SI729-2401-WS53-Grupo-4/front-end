import { Injectable } from '@angular/core';
import {BaseService} from "../../../public/components/base-service/base.service";
import {Booking} from "../model/booking.entity";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingService extends BaseService<Booking>{
  constructor(http:HttpClient) {
    super(http,`${environment.serverBasePath}/booking`)
  }
}
