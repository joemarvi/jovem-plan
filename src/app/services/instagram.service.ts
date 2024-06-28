import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private apiUrl = 'http://localhost:3000/instagram-posts';
  private accessToken = 'IGQWRPZAWJZAY1QxaElBRU5JTmNqa2JPOTVGaC1Yb3hMUjV5SXllaUJOeHpZAa19GaUkyMDVmMy1wREI2LWhaaVVpa3puV0otUDJPWGNGVmtmLThKQ0lOaXhaM3lIWnBHYTlVZAmIxdS1IdmpwTWdqLUdJcmV6dmZAfUGcZD';

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


