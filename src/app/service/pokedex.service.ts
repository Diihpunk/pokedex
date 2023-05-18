import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }



  getById(id:number):Promise<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise();
  }
  get(params?:HttpParams):Promise<any>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=150&"+params).toPromise();
  }


}
