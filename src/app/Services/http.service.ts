import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private httpService : HttpClient ) { }

  GetPhotos(page){
    return this.httpService.get('https://jsonplaceholder.typicode.com/photos?_page='+page);
  }

  SearchById(Id){
    return this.httpService.get('https://jsonplaceholder.typicode.com/photos/'+Id);
  }
}
