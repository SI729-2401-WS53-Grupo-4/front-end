import { Injectable } from '@angular/core';
import {BaseService} from "../../../public/components/base-service/base.service";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../model/usuario.entity";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService<Usuario> {
  constructor(http: HttpClient) {
    super(http, `${environment.serverBasePath}/user`);
  }
}
