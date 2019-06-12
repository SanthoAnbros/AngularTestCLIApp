import { Injectable } from '@angular/core';
import{ observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemsToBePost } from './Classes/comps';

@Injectable()
export class ServicesService {

  constructor(private httpClient : HttpClient) { }

  getAPIValue():Observable<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1/comments')
  }

  InsertValue(post:ItemsToBePost):Observable<any>{
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", post);
  }
}
