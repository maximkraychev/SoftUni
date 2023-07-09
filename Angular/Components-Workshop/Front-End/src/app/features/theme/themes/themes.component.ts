import { Component, OnInit } from '@angular/core';
import { MockAuthService } from 'src/app/services/mock-auth.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit{
  isUser: boolean | undefined;

  constructor(private auth: MockAuthService){}

  ngOnInit(): void {
    this.isUser = this.auth.isUser;
  }
}
