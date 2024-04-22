import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  url : string = 'http://localhost:8087/etab/';

  constructor(private http: HttpClient) { }

  ajouterEtablissement(etab:any):Observable<any>{
    return this.http.post(this.url+"add-etab",etab)
  }
  listeEtablissement():Observable<any>{
    return this.http.get<any>(this.url+"retrieve-all-etab")
  }
  supprimerEtablissement(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"remove-etab/"+id)
  }
  modifierEtablissement(etab:any):Observable<any>{
    return this.http.put<any>(this.url+"update-etab",etab)
  }
  getEtablissement(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrieve-etab/"+id)
  }


}
