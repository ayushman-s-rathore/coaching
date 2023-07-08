import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Coach } from './models/coach.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   
    private userSubject: BehaviorSubject<Coach | null>;
    public user: Observable<Coach | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<Coach | null>(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    verify(email: string, code:string) {
        return this.http.post<any>('api/verify', code,{
            params: new HttpParams().set('email', email)
        })
            .pipe(map(response => {
                const token = response.token; // Assuming the server response contains a 'token' field
                const user: Coach = {
                    // Assign appropriate user ID if available
                    email,
                    token,
                    name: undefined,
                    password: undefined
                };
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
    }
}
