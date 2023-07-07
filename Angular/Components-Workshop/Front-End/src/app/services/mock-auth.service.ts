import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
  private isLoginUser: boolean = false;
  private authSubject: Subject<boolean> = new Subject<boolean>();
  public authObservable: Observable<boolean> = this.authSubject.asObservable();

  constructor() { }

  login() {
    this.isLoginUser = true;
    this.authSubject.next(this.isLoginUser);
  }

  logout() {
    this.isLoginUser =false;
    this.authSubject.next(this.isLoginUser);
  }

  get isUser() {
    return this.isLoginUser;
  }
}
