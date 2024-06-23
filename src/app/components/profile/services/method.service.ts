import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {BaseService} from "../../../public/components/base-service/base.service";
import {Method} from "../model/method.entity";

@Injectable({
  providedIn: 'root'
})
export class MethodService extends BaseService<Method> {
  constructor(http: HttpClient) {
    super(http, `${environment.serverBasePath}/debitCard`);
  }
}
