import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string = 'https://rickandmortyapi.com/api/character'

  constructor(
    private httpClient : HttpClient
  ) { }

  obtienePersonajes(){
    return this.httpClient.get(this.url)
  }
}
