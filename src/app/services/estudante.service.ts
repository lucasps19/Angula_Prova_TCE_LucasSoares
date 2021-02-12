import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://localhost:44333/Api/Estudantes'

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: { nome: string; }): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id: number, data: { nome: string | null; matricula?: number; }): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  searchByNome(nome: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?nome=${nome}`);
  }
}
