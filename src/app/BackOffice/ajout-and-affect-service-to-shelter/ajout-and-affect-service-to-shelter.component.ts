import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceShelterService } from 'src/app/services/service-shelter.service';

@Component({
  selector: 'app-ajout-and-affect-service-to-shelter',
  templateUrl: './ajout-and-affect-service-to-shelter.component.html',
  styleUrls: ['./ajout-and-affect-service-to-shelter.component.css']
})
export class AjoutAndAffectServiceToShelterComponent {
  service = {
    nomService: '',
    description: '',
    typeService: '',
  
  };
  selectedShelterId: number =0;
   // Variable pour stocker l'ID du refuge sélectionné
   shelters: any[] = []; 

  constructor(public _shared: ServiceShelterService, private router: Router) {}

  ngOnInit() {
    // Charger la liste des refuges au démarrage du composant
    this.loadShelters();
  }

  loadShelters() {
    // Appeler la méthode du service pour charger la liste des refuges
    this._shared.getAllShelters()
      .subscribe(
        (data: any) => {
          this.shelters = data; // Stocker la liste des refuges dans la variable shelters
        },
        error => {
          console.log(error);
        }
      );
  }

  ajout() {
    // Créer le service et l'affecter au refuge sélectionné
    this._shared.ajouterEtaffecterServiceToShelter(this.selectedShelterId, this.service)
      .subscribe(
        (res: any) => {
          this.service = {
            nomService: '',
            description: '',
            typeService: '',

          };
          this.router.navigate(['/admin/listService']);
        },
        err => {
          console.log(err);
        }
      );
  }
}
