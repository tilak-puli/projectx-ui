import { Injectable } from '@angular/core';
import UserCredentials from './types/user-credentials';

@Injectable({ providedIn: 'root' })
export class LoginService {
  userCredentials: UserCredentials;

  constructor() {
    this.userCredentials = { usernameOrEmail: '', password: '' };
  }

  login(): void {
    console.log(this.userCredentials);
  }
}
