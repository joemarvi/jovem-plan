import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from '../interfaces/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) {}

  saveMessage(message: Messages): Observable<Messages> {
    return this.http.post<Messages>(this.apiUrl, message);
  }

  getMessages(): Observable<Messages[]> {
    return this.http.get<Messages[]>(this.apiUrl);
  }
}
