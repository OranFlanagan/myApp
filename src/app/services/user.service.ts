import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

export interface User {
  name: string;
  email: string;
}

/*@Injectable({ providedIn: 'root' }) export class UserService 
{
  private userSubject = new BehaviorSubject<User | null>(null);

  setUser(user: User) 
  {
    this.userSubject.next(user);
    // optionally persist to localStorage:
    // localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }
}*/
@Injectable({ providedIn: 'root' })
export class SomeService {
  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    await this.storage.create();           // ← only once per app
  }
}

