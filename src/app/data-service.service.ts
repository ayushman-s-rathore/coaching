import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  users(){
    return this.http.get('https://angular-app-5cfc6-default-rtdb.firebaseio.com/posts.json');
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>('https://angular-app-5cfc6-default-rtdb.firebaseio.com/posts.json', data);
  }
}
