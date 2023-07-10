import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Usuario from '../models/Usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarioApiUrl = 'http://localhost:3000/api/usuarios';
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioApiUrl);
  }
}
