import { Component } from '@angular/core';
import { MockAuthService } from 'src/app/services/mock-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private mockAuth: MockAuthService){}

  get isUser() {
    return this.mockAuth.isUser;
  }
}
