import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
  private isLogin: boolean = false;
  private authSubject: Subject<boolean> = new Subject<boolean>();
  public authObservable: Observable<boolean> = this.authSubject.asObservable();

  constructor() { }

  login() {
    this.isLogin = true;
    this.authSubject.next(this.isLogin);
  }

  logout() {
    this.isLogin =false;
    this.authSubject.next(this.isLogin);
  }
}
