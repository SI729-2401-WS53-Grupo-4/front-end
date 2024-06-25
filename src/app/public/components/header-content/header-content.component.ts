import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    MatAnchor,
    MatToolbar,
    RouterLink,
    NgOptimizedImage,
    MatButton
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {
  currentUserName: string = '';
  constructor(private router: Router) {
  }

}
