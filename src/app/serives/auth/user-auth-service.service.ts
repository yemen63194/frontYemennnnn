import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor() { }

  
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): string[] {
    const rolesString = localStorage.getItem('roles');
    if (rolesString) {
      return JSON.parse(rolesString);
    } else {
      return [];
    }
  }
  

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }


  public getToken(): string {
    const token = localStorage.getItem('jwtToken');
    return token ?? ''; // Utilisation de l'opérateur de coalescence nulle pour renvoyer une chaîne vide si le token est null
  }
  

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }


}
