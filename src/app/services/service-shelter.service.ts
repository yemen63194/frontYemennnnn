import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceShelterService {

  constructor(private http : HttpClient) { }
  private url ='http://127.0.0.1:8087/' ;



  createNewService(service: any){
    return this.http.post(this.url + 'Service/addService' , service);
  }

  getAllServices(){
    return this.http.get(this.url +'Service/allService');
  }
  deleteService(id:number){
    return this.http.delete(this.url +'Service/RemoveService/' + id);
  }
  getServiceById(id:number){
    return this.http.get(this.url + 'Service/Service/' + id);
  }
  updateService(service:any){
    return this.http.put(this.url + 'Service/UpdateService' ,service);

  }

  ajouterEtaffecterServiceToShelter(idShelter: number, service: any) {
    return this.http.put(this.url + 'Service/Service/' + idShelter, service);
  }
  getAllShelters(){
    return this.http.get(this.url +'shelter/allShelter');
  }
  getAllServicesWithShelters(){
    return this.http.get(this.url +'Service/shelter/AllservicesWithShelter');
  }
  updateAllServicesWithShelters(updatedServices: any[]) {
    return this.http.put(this.url + 'Service/Service/updateAllService' ,updatedServices);
  }

 
}
