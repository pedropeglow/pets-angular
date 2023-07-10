import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pet from '../models/Pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  petApiUrl = 'http://localhost:3000/api/pets';
  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]>{
    var token = localStorage.getItem('token');
    return this.http.get<Pet[]>(this.petApiUrl, {headers: {['x-access-token']: `${token}`}});
  }
  
  createPet(pet: Pet): Observable<Pet>{
    var token = localStorage.getItem('token');
    return this.http.post<Pet>(this.petApiUrl, {
      nome: pet.nome,
      tipo: pet.tipo,
      idade: pet.idade,
      usuario: pet.usuario
    }, {headers: {['x-access-token']: `${token}`}}
    );
  }

  updatePets(pet: Pet): Observable<Pet>{
    var token = localStorage.getItem('token');
    return this.http.put<Pet>(this.petApiUrl + `/${pet._id}`, pet, {headers: {['x-access-token']: `${token}`}});
  }

  deletePet(id: string) {
    var token = localStorage.getItem('token');
    return this.http.delete(this.petApiUrl + `/${id}`, {headers: {['x-access-token']: `${token}`}});
  }

}
