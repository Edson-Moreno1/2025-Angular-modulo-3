import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

export type decodedToken = {
  userId: string;
  displayName: string;
  role: 'admin' | 'customer' | 'guest';
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) {}
  get token(): string | null {
    return localStorage.getItem('token');
  }

  get decodedToken(): decodedToken | null {
    const token = this.token;
    return token ? jwtDecode<decodedToken>(token) : null;
  }


  register(data: any) {
    this.httpClient.post(``, data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
