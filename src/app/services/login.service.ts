import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string = 'http://localhost:8085/api/v1/auth/';

  constructor(private http: HttpClient) { }

  login(email:any,password:any):Observable<any>{
    return this.http.post<any>(this.url+"authenticate",{email:email,password:password})
  }


  register(u:any):Observable<any>{
    return this.http.post<any>(this.url+"register",u)
  } 
}
