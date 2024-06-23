import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";
import {UsuariosService} from '../../services/usuarios.service';
import {Usuario} from '../../model/usuario.entity';
import {CommonModule} from '@angular/common';
import {Method} from "../../model/method.entity";
import {MethodService} from "../../services/method.service";

@Component({
  selector: 'app-profile-inputs',
  standalone: true,
  imports: [MatGridListModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './profile-inputs.component.html',
  styleUrl: './profile-inputs.component.css'
})
export class ProfileInputsComponent implements OnInit {
  data: Usuario[] = [];
  dataM: Method[] = [];

  constructor(private usuarioService: UsuariosService, private methodService: MethodService) { }

  private getAllUsuarios() {
      this.usuarioService.getAll().subscribe((response: any) => {
        this.data = response;
      });
    };
  private getAllCard(){
    this.methodService.getAll().subscribe((response: any) =>{
      this.dataM = response;
    })
  };

  ngOnInit(): void {
      this.getAllUsuarios();
      this.getAllCard();
    }
}
