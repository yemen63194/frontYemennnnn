import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  constructor(private http : HttpClient) { }
  private url ='http://127.0.0.1:8087/' ;



  createNewShelter(shelter: any){
    return this.http.post(this.url + 'shelter/addShelter' , shelter);
  }

  getAllShelters(){
    return this.http.get(this.url +'shelter/allShelter');
  }
  getAllAchievements(){
    return this.http.get(this.url +'shelter/allAchievment');
  }
  
  deleteShelter(id:number){
    return this.http.delete(this.url +'shelter/RemoveShelter/' + id);
  }
  affectHomelessToShelter(idHomeless: number, idShelter: number) {
    const body = {}; // Define your request body if needed, currently empty
    return this.http.put('http://127.0.0.1:8087/Homeless/affect/' + idHomeless + "/" + idShelter, body);
}
  getShelterById(id:number){
    return this.http.get(this.url + 'shelter/Shelter/' + id);
  }
  updateShelter(shelter:any){
    return this.http.put(this.url + 'shelter/UpdateShelter' ,shelter);

  }
  getServicesByShelterId(shelterId: number) {
    return this.http.get(this.url + 'Service/shelter/services/' + shelterId);
  }

  calculateDonation(shelterId: number) {
    return this.http.get(this.url + 'shelter/donation/' + shelterId);
  }
  getAllShelterDonations() {
    return this.http.get(this.url + 'shelter/allShelterDonations');
  }
  // addCauseToShelter(shelterId: number, causeData: any) {
  //   return this.http.post(this.url + 'shelter/addCauseToShelter/' + shelterId, causeData);
  // }
  deleteCauseFromShelter(shelterId: number) {
    return this.http.delete(this.url + 'shelter/deleteCause/' + shelterId);
  }
  updateCauseInShelter(shelterId: number, causeData: any) {
    return this.http.put(this.url + 'shelter/updateCause/' + shelterId, causeData);
    
  }
  addCauseToShelter(shelterId: number, causeData: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8087/shelter/addCauseToShelter/${shelterId}`, causeData, { responseType: 'text' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'Une erreur s\'est produite lors de l\'ajout de la cause.';
          if (error.error instanceof ErrorEvent) {
            // Erreur côté client
            errorMessage = `Erreur: ${error.error.message}`;
          } else {
            // Erreur côté serveur
            errorMessage = `Code d'erreur: ${error.status}, message: ${error.message}`;
          }
          return throwError(errorMessage);
        }),
        map((response: string) => {
          // Analyse manuelle de la réponse pour déterminer si c'est un message de succès
          if (response && response.includes('Cause added successfully')) {
            return 'Cause ajoutée avec succès.';
          } else {
            // Si la réponse ne contient pas de message de succès, renvoyer une erreur
            return throwError('La cause n\'a pas pu être ajoutée.');
          }
        })
      );
  }
  checkProgressAndHandleAchievement(shelterId: number) {
    return this.http.get(this.url + 'shelter/progress/' + shelterId);
  }
}
