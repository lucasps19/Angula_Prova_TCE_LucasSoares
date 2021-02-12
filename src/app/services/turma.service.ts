import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://localhost:44333/Api/Turmas'

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: { disciplina: string; professorRegistro?: number; }): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id: number, data: { disciplina: string | null; professorRegistro?: number; }): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  searchByNome(disciplina: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?disciplina=${disciplina}`);
  }
}
