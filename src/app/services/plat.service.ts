import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {


  url : string = 'http://localhost:8087/plat/';

  constructor(private http: HttpClient) { }

  ajouterPlat(pt: any, IdCuisinier: number): Observable<any> {
    return this.http.post(this.url + `addPlatWithIngredients/${IdCuisinier}`, pt);
  }

  
  listePlats():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_plat")
  }
  listePlatsParResto(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_platsParResto/"+id)
  } 
  supprimerPlats(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_plat/"+id);
    
  }
  modifierPlats(plats:any):Observable<any>{
    return this.http.put<any>(this.url+"update_plat",plats)
  }
  getPlat(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_plat/"+id)
  }
  likeDislike(patientId: number, platId: number, reaction: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8087/reactions/patient/${patientId}/plat/${platId}?reaction=${reaction}`, {});
  }
  
  
  getnbrDisLike(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:8087/reactions/nbrPostDislikes/"+id)
  }
  getnbrLike(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:8087/reactions/nbrPostlikes/"+id)
  }

  getChefStats(): Observable<any> {
    return this.http.get(`http://localhost:8087/cuisinier/chef-stats`);
  }
}
