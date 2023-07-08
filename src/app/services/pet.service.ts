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
    return this.http.get<Pet[]>(this.petApiUrl);
  }
  
  createPet(pet: Pet): Observable<Pet>{
    return this.http.post<Pet>(this.petApiUrl, {
      nome: pet.nome,
      tipo: pet.tipo,
      idade: pet.idade
    });
  }

  updatePets(pet: Pet): Observable<Pet>{
    return this.http.put<Pet>(this.petApiUrl + `/${pet._id}`, pet);
  }

  deletePet(id: string) {
    console.log('id', id)
    return this.http.delete(this.petApiUrl + `/${id}`);
  }

}
