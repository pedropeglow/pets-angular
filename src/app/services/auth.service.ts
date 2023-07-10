import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Login from '../models/Login';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginApiUrl = 'http://localhost:3000/api/login';
  constructor(private http: HttpClient) { }
  
  login(email: string, senha: string): Observable<Login>{
    return this.http.post<Login>(this.loginApiUrl, {
      email: email,
      senha:  senha,
    }).pipe(tap({
      next: p => this.setToken(p.token)
    }))
  }
  
  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  logout(){
    localStorage.removeItem('token');
  }

  private setToken(token: string) {
    localStorage.setItem('token', token)
  }
}
