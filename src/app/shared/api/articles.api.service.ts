import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs';
import { NewsData, NewsItem } from '../types/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesApiService {
  articlesApiUrl = 'https://api.spaceflightnewsapi.net/v4/articles';
  constructor(private http: HttpClient) {}

  getArticles(s: string) {
    return this.http
      .get<NewsData>(`${this.articlesApiUrl}/?limit=100${s && `&search=${s}`}`)
      .pipe(shareReplay(1))
      .pipe(map((data) => data.results));
  }
  getArticle(id: number) {
    return this.http
      .get<NewsItem>(`${this.articlesApiUrl}/${id}`)
      .pipe(shareReplay(1));
  }
}
