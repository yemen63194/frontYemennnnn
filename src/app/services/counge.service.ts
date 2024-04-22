import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoungeService {

  url : string = 'http://localhost:8087/counge/';
  ur : string = 'http://localhost:8087/tst/tr';

  constructor(private http: HttpClient) { }

  ajouterCounge(counge:any):Observable<any>{
    return this.http.post(this.url+"add",counge)
  }
  // demandeCounge(id:any,counge:any):Observable<any>{
  //   return this.http.post(this.url+"DemandeCoungeCuisine/"+id,counge)
  // }
  demandeCounge(id: any, counge: any): Observable<any> {
    return this.http.post(`${this.url}DemandeCoungeCuisine/${id}`, counge)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'Une erreur s\'est produite lors de la demande de congé.';
          if (error.error instanceof ErrorEvent) {
            // Erreur côté client
            errorMessage = `Erreur: ${error.error.message}`;
          } else {
            // Erreur côté serveur
            errorMessage = `Code d'erreur: ${error.status}, message: ${error.message}`;
          }
          return throwError(errorMessage);
        }),
        map((response: any) => {
          console.log(response.message)
          // Analyse manuelle de la réponse pour déterminer si c'est un message de succès
          if (response && response.message === 'tu a déjà pris un congé récemment') {
            return 'tu a déjà pris un congé récemment';
          } else {
            // Si la réponse ne contient pas de message de succès, renvoyer une erreur
            return throwError('Le congé n\'a pas pu être ajouté.');
          }
        })
      );
  }
private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = error.error.message;
    } else {
        // Server-side errors
        errorMessage = error.error; // Assuming server sends error message directly
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}
  listeCounge():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_counge")
  }
  getNumberOfCongesForDate():Observable<any>{
    return this.http.get<any>(this.url+"getNumberOfCongesForDate")
  }
  gettst():Observable<any>{
    return this.http.get<any>(this.ur)
  }
  
  supprimerCounge(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_counge/"+id)
  }
  modifierCounge(id: number, counge: any): Observable<any> {
    return this.http.put<any>(`${this.url}update_counge/${id}`, counge);
  }
  
  updateCoungeEtat(id: number, newEtat: string): Observable<any> {
    const url = `${this.url}${id}/etat`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // Spécifiez que le type de contenu est JSON
      })
    };
    return this.http.put(url, JSON.stringify(newEtat), httpOptions); // Convertir newEtat en JSON avant de l'envoyer
  }
  // modifierCounge(etab:any):Observable<any>{
  //   return this.http.put<any>(this.url+"update_counge",etab)
  // }
  getCounge(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_counge/"+id)
  }
}
