import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private host = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get<ITheme[]>(`${this.host}/themes`);
  }

  loadPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(`${this.host}/posts${limit ? `?limit=${limit}`: ``}`);
  }
}
