import {Component, OnInit} from '@angular/core';
import { ButtonModule} from "primeng/button";
import {RouterLink, Router} from "@angular/router";
import {LocalstorageService} from "../../../public/components/local-storage/localstorage.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {AuthenticationServices} from "../iam/services/authentication.services";
import {SignInRequest} from "../iam/model/sign-in.request";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, RouterLink, FormsModule, NgIf, ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  constructor(private builder:FormBuilder, private authenticationService: AuthenticationServices) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;
  }

}
