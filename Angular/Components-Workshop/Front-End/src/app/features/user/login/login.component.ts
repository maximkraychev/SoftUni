import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/services/mock-auth.service';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.login();
    // this.route.navigate(['home'])
  }

  handleSubmit() {
    console.log('submit');
    
  }

  // login() {
  //   this.auth.login();
  // }
}
