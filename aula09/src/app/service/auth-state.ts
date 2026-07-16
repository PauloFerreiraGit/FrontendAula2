import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './firebase';
import { EnvironmentInjector } from '@angular/core';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {

  private auth = inject(FirebaseService).auth;
  private environmentInjector = inject(EnvironmentInjector);

  private user$ = new BehaviorSubject<User | null>(null);

  setUser(user: User | null) {
    this.user$.next(user);
  }

  getUser() {
    return this.user$.asObservable();
  }
}




