import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/services/mock-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 constructor(private auth: MockAuthService, private route: Router){}

 ngOnInit(): void {
    this.logout();
    this.route.navigate(['home']);
 }

 logout() {
  this.auth.logout();
}
}
