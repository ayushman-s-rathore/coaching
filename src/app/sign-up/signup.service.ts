import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  

  constructor(private http: HttpClient) { }
  
  getKey(){
   return this.http.get('');
  }
 
  
  
}
