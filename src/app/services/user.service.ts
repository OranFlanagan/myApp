import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);

  /** call this after login (or signup) */
  setUser(user: User) {
    this.userSubject.next(user);
    // optionally persist to localStorage:
    // localStorage.setItem('currentUser', JSON.stringify(user));
  }

  /** anywhere else can subscribe */
  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }
}
