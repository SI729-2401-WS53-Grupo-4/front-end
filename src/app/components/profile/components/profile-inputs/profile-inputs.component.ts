import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile-inputs',
  standalone: true,
  imports: [MatGridListModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, RouterLink],
  templateUrl: './profile-inputs.component.html',
  styleUrl: './profile-inputs.component.css'
})
export class ProfileInputsComponent {

}
