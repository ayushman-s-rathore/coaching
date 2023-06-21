import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { countries } from 'countries-list';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  
  getKey(){
   return this.http.get('');
  }
  
  getCountries(): {name: string}[]{
    return Object.values(countries);
  }
}
