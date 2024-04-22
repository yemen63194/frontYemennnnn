import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  url : string = 'http://localhost:8087/medicament/';

  constructor(private http: HttpClient) { }

  ajouterMedicament(med:any):Observable<any>{
    return this.http.post(this.url+"add",med)
  }
  listeMedicament():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_medicament")
  }
  supprimerMedicament(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_medicament/"+id);
    
  }
  modifierMedicament(med:any):Observable<any>{
    return this.http.put<any>(this.url+"update_medicament",med)
  }
  getMedicament(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_medicament/"+id)
  }

}
