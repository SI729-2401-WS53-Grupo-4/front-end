import { Component } from '@angular/core';
import { ButtonModule} from "primeng/button";
import {RouterLink, Router} from "@angular/router";
import {LocalstorageService} from "../../../public/components/local-storage/localstorage.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, RouterLink, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private localStorage: LocalstorageService, private router:Router) {}

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    if (this.localStorage.login(credentials)) {
      console.log('User logged in successfully!');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
