import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";
import {EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Usuario} from "../../model/usuario.entity";
import {UsuariosService} from '../../services/usuarios.service';
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [MatGridListModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, RouterLink, FormsModule, NgIf],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
// Attributes
  @Input() usuario: Usuario;
  @Input() editMode = true;
  @Output() usuarioUpdated = new EventEmitter<Usuario>();
  @ViewChild('usuarioForm', {static: false}) usuarioForm!: NgForm;

    constructor(private usuariosService: UsuariosService) {
      this.usuario = {} as Usuario;
    }

    ngOnInit(): void {
      this.loadUsuario(1);
    }

    private loadUsuario(id: number) {
      this.usuariosService.get(id).subscribe({
        next: (usuario) => this.usuario = usuario,
        error: (err) => console.error('Error loading usuario:', err)
      });
    }

    private resetEditState() {
      this.usuario = {} as Usuario;
      this.editMode = true;
      this.usuarioForm.resetForm();
    }

    onSubmit() {
      if (this.usuarioForm.form.valid) {
        this.usuariosService.update(this.usuario.id, this.usuario).subscribe({
          next: (updatedUsuario) => {
            this.usuarioUpdated.emit(updatedUsuario);
            this.resetEditState();
          },
          error: (err) => console.error('Error updating usuario:', err)
        });
      } else {
        console.error('Invalid data in form');
      }
    }
}
