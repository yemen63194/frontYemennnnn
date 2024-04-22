import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaladieService {

  url : string = 'http://localhost:8087/maladie/';

  constructor(private http: HttpClient) { }

  ajouterMaladie(pt:any):Observable<any>{
    return this.http.post(this.url+"add",pt)
  }
  listeMaladies():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_maladie")
  }
  supprimerMaladie(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_maladie/"+id);
    
  }
  modifierMaladie(maladies:any):Observable<any>{
    return this.http.put<any>(this.url+"update_maladie",maladies)
  }

  getMaladie(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_maladie/"+id)
  }

  
}
