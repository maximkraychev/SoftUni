import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/services/mock-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private auth: MockAuthService, private route: Router) {}

  ngOnInit(): void {
    this.login();
    this.route.navigate(['home'])
  }

  login() {
    this.auth.login();
  }
}
