import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-plan-options',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, RouterLink],
  templateUrl: './plan-options.component.html',
  styleUrl: './plan-options.component.css'
})
export class PlanOptionsComponent {

}
