import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Coach } from './models/coach.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient,
              public router: Router) {}

  signUp(user: Coach){
    let api = `${this.endpoint}/register-user`;
    return this.http
    .post<any>(api, user).pipe(catchError(this.handleError))
    .subscribe((res: any) => {
      localStorage.setItem('access_token', res.token);
      this.getUserProfile(res._id).subscribe((res) => {
        this.currentUser = res;
        this.router.navigate(['user-profile/' + res.msg._id]);
      });
    });;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
