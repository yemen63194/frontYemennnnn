import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url : string = 'http://localhost:8087/ingredient/';

  constructor(private http: HttpClient) { }

  ajouterFood(med:any):Observable<any>{
    return this.http.post(this.url+"add",med)
  }
  addDTO(med:any):Observable<any>{
    return this.http.post(this.url+"addDTO",med)
  }
  listeFood():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_ingredient")
  }
  supprimerFood(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_food/"+id);
    
  }
  modifierFood(med:any):Observable<any>{
    return this.http.put<any>(this.url+"update_food",med)
  }
  getFood(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_food/"+id)
  }
  private baseUrl = 'http://localhost:8087/customers'; // Remplacez l'URL par celle de votre API

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(`${this.baseUrl}`, formData, { headers });
  }
  
}
