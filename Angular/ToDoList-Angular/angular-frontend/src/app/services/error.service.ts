import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorSubject: Subject<string> = new Subject<string>();
  public error$: Observable<string> = this.errorSubject.asObservable();

  setError(errorMessage: string) {
    this.errorSubject.next(errorMessage);
  }
}
