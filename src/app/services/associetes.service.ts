import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Associete } from '../interfaces/associete';

@Injectable({
  providedIn: 'root'
})
export class AssocietesService {
  private apiUrl = 'http://localhost:3000/associates';

  constructor(private http: HttpClient) {}

  getAssocietes(): Observable<Associete[]> {
    return this.http.get<Associete[]>(this.apiUrl);
  }

  getAssocieteById(id: string): Observable<Associete> {
    return this.http.get<Associete>(`${this.apiUrl}/${id}`);
  }

  getLoggedInAssociete(): Observable<Associete> {
    const associeteId = localStorage.getItem('currentAssocieteId');
    if (associeteId) {
      return this.getAssocieteById(associeteId);
    } else {
      throw new Error('No associete logged in');
    }
  }

  addAssociete(associete: Associete): Observable<Associete> {
    associete.dataRegistro = new Date().toISOString().split('T')[0];  // Adiciona a data de registro atual
    return this.http.post<Associete>(this.apiUrl, associete);
  }
}
