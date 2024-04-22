import { Component } from '@angular/core';
import { ServiceShelterService } from 'src/app/services/service-shelter.service';

@Component({
  selector: 'app-list-service-shelter',
  templateUrl: './list-service-shelter.component.html',
  styleUrls: ['./list-service-shelter.component.css']
})
export class ListServiceShelterComponent {
  services: any; 
  servicesWithShelters: any;

  constructor(public _shared: ServiceShelterService) {}

  


  // ngOnInit(): void {
  //   this._shared.getAllServices()  
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.services = res;  
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     ); 
  // }
  ngOnInit(): void {
    this._shared.getAllServicesWithShelters().subscribe(
      data => {
        this.servicesWithShelters = data;
      },
      error => {
        console.log('Une erreur s\'est produite lors de la récupération des services avec leurs abris associés :', error);
      }
    );
  }
  delete(id: number) {
    console.log("Deleting service with ID:", id);  
    this._shared.deleteService(id)  
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      ); 
  }
}
