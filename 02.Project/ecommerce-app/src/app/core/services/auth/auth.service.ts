import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

type decodedToken = {
  userId: string;
  displayName: string;
  role: 'admin' | 'customer' | 'guest';
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  get token(): string | null {
    return localStorage.getItem('token');
  }

  get decodedToken(): decodedToken | null {
    const token = this.token;
    return token ? jwtDecode<decodedToken>(token) : null;
  }
}
