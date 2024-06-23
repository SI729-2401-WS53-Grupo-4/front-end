import {Component, OnInit} from '@angular/core';
import {Button, ButtonModule} from "primeng/button";
import {RouterLink,Router} from "@angular/router";
import {LocalstorageService} from "../../../public/components/local-storage/localstorage.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {AuthenticationServices} from "../iam/services/authentication.services";
import {SignUpRequest} from "../iam/model/sign-up.request";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonModule, RouterLink, FormsModule, NgIf, ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private builder:FormBuilder, private authenticationService: AuthenticationServices) {}
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
    const signUpRequest = new SignUpRequest(username, password);
    this.authenticationService.signUp(signUpRequest);
    this.submitted = true;
  }
}
