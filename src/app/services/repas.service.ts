import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  url: string = 'http://localhost:8087/repas/';

  constructor(private http: HttpClient) { }

  ajouterRepas(id: number, med: any): Observable<any> {
    return this.http.post(this.url + "affecter-repas/" + id, med)
  }
  listeRepas(): Observable<any> {
    return this.http.get<any>(this.url + "retrive_all_repas")
  }
  supprimerRepas(id: any): Observable<any> {
    return this.http.delete<any>(this.url + "delete_repas/" + id);

  }
  modifierRepas(med: any): Observable<any> {
    return this.http.put<any>(this.url + "update_repas", med)
  }


}
