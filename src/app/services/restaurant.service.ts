import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url : string = 'http://localhost:8087/restaurant/';

  constructor(private http: HttpClient) { }


 

  ajouterRestaurant(med:any):Observable<any>{
    return this.http.post(this.url+"add",med)
  }
  modifierRestaurantDTO(id: number, restaurant: any): Observable<any> {
    return this.http.put<any>(`${this.url}updateResto/${id}`, restaurant);
  }
  listeRestaurant():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_restaurant")
  }
  listeEtablissementNull():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_etablissementNull")
  }
  getEtablissementByRestaurantId(restaurantId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/restaurant/${restaurantId}/etablissement`);
  }
  supprimerRestaurant(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_restaurant/"+id);
    
  }

  modifierRestaurant(med:any):Observable<any>{
    return this.http.put<any>(this.url+"update_restaurant",med)
  }
  getRestaurant(id:any):Observable<any>{

    return this.http.get<any>(this.url+"retrive_restaurant/"+id)
  }}
