import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TableauService {

  constructor(private http: Http) { }
getAuthToken() {
    return this.http.get('/api/token')
      .map(res1 => res1.json());
  };
  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/tableau')
      .map(res => res.json());
  }
}
