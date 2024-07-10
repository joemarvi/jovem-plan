import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private apiUrl = 'http://localhost:3000/instagram-posts';
  private accessToken = 'IGQWRQN1FHYjVVWFp3VzAyb09qYXBHSDA2X0ZAQNTFueThIR081VUgtWTkxdVBnc3pmcnRXcHhGemdoSmxxX18xemdZAdWZAuWjBIanBlNnlvMnZABcFUtUW9oWW9RYzJyZAXR4S2hjUllUMlJYRThMQ0E4MlVFazRZAaTAZD';

  constructor(private http: HttpClient) { }

  getInstagramPosts(): Observable<any> {
    const params = {
      fields: 'id,caption,media_type,media_url,thumbnail_url,timestamp,like_count,comments_count',
      access_token: this.accessToken
    };

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}


