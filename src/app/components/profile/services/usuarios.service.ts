import { Injectable } from '@angular/core';
import { BaseService } from "../../profile/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../model/usuario.entity";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService<Usuario> {

  constructor(http: HttpClient) {
      super(http);
      this.resourceEndpoint = '/usuarios';
    }
}
