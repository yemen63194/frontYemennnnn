import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { RegisterRequest } from '../FrontOffice/models/register-request';
import { AuthenticationResponse } from '../FrontOffice/models/authentication-response';
import { AuthenticationRequest } from '../FrontOffice/models/authentication-request';
import { VerificationRequest } from '../FrontOffice/models/verification-request';
import { UserAuthServiceService } from './auth/user-auth-service.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8087/api/v1/auth'
private baseUrl1 = 'http://localhost:8087/api/v1/demo-controller'
  requestHeader = new HttpHeaders(
{
  "No-Auth":"True"
}
  );
  constructor(
    private http: HttpClient,
    private userAuthServiceService : UserAuthServiceService
  ) { }

  register(
    registerRequest: RegisterRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/register`, registerRequest);
  }

  login(authRequest: AuthenticationRequest ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/authenticate`, authRequest);
  }
  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(this.baseUrl1 + 'forgotPassword', { email });
  }

  resetPassword(email: string, code: string, newPassword: string): Observable<any> {
    return this.http.post<any>(this.baseUrl1 + 'resetPassword', { email, code, newPassword });
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/verify`, verificationRequest);
  }
  public roleMatch(allowedRoles: any): any {
    let isMatch = false;
    const userRoles : any = this.userAuthServiceService.getRoles();    
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].name === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

  getCurrentUsersWithRole(id: number, role: string): Observable<any> {
    return this.http.get<any>(this.baseUrl +"/current/user/" + id+"/"+role);
  }
//****** STATS ******* */
  
  getLengthByRole(role:string) {
    return this.http.get<any[]>(this.baseUrl +"/users/connected/"+role).pipe(
      map((users: any[]) => users.length)
    );
  }
}
