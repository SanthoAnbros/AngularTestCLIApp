import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) { }

  GetItem(){
     return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
