
import { Injectable } from '@angular/core';
import { AuthStateService } from './auth-state';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {

  constructor(private authState: AuthStateService) {}

  login(email: string, password: string) {
    console.log('Login via AuthFacadeService');

    // Aqui chamamos o AuthStateService
    this.authState.setUser({
      email,
      uid: 'fake-uid',
    } as any);
  }

  logout() {
    this.authState.setUser(null);
  }

  getUser() {
    return this.authState.getUser();
  }
}
