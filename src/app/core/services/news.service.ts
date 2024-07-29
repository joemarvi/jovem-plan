import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://localhost:3000/news';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.apiUrl);
  }

  getAllNewss(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  getNewsByCategory(category: string): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}?category=${category}`);
  }

  addNews(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news);
  }

  updateNews(news: News): Observable<News> {
    return this.http.put<News>(`${this.apiUrl}/${news.id}`, news);
  }

  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
