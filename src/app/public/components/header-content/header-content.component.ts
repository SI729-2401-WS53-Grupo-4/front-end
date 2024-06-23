import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {AuthenticationServices} from "../../../components/authentication/iam/services/authentication.services";

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
  isSignedIn: boolean = false;
  constructor(private router: Router, private authenticationService: AuthenticationServices) {
    this.authenticationService.currentUsername.subscribe((username) => this.currentUserName = username);
    this.authenticationService.isSignedIn.subscribe((isSignedIn) => this.isSignedIn = isSignedIn);
  }
  onSignOut(){
    this.authenticationService.signOut()
  }

}
