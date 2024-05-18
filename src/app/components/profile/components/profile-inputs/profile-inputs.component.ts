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

@Component({
  selector: 'app-profile-inputs',
  standalone: true,
  imports: [MatGridListModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './profile-inputs.component.html',
  styleUrl: './profile-inputs.component.css'
})
export class ProfileInputsComponent implements OnInit {
  data: Usuario[] = [];

  constructor(private usuarioService: UsuariosService) { }

  private getAllUsuarios() {
      this.usuarioService.getAll().subscribe((response: any) => {
        this.data = response;
      });
    };

  ngOnInit(): void {
      this.getAllUsuarios();
    }
}
