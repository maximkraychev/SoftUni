import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MockAuthService } from 'src/app/services/mock-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLogin: boolean = false;
  private authSub!: Subscription;

  constructor(private auth: MockAuthService) {}

  ngOnInit(): void {
    this.authSub = this.auth.authObservable.subscribe((data) => {
      this.isLogin = data;
    }, (err) => {
      console.log(err);
    })
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
