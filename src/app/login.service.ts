import { Injectable } from '@angular/core';
import UserCredentials from './types/user-credentials';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  userCredentials: UserCredentials;
  apiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
    this.userCredentials = { usernameOrEmail: '', password: '' };
  }

  login(): void {
    this.apiService.login(this.userCredentials).subscribe();
  }
}
