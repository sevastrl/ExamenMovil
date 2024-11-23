import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'https://gutendex.com/books/';  

  constructor(private http: HttpClient) { }

  
  getRandomBook(): Observable<any> {
   
    const randomId = Math.floor(Math.random() * 10000) + 1;

   
    return this.http.get<any>(`${this.baseUrl}?ids=${randomId}`);
  }
}
