import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private host = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get(`${this.host}/themes`);
  }

  loadPosts(limit?: number) {
    return this.httpClient.get(`${this.host}/posts${limit ? `?limit=${limit}`: ``}`);
  }
}
