import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  // users(){
  //   return this.http.get('https://localhost:8080');
  // }

  postData(url: string,data: any): Observable<any> {
    return this.http.post<any>('api/newCoaching/'+url, data);
  }
}
