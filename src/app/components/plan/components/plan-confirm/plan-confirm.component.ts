import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-plan-confirm',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './plan-confirm.component.html',
  styleUrl: './plan-confirm.component.css'
})
export class PlanConfirmComponent {

}
