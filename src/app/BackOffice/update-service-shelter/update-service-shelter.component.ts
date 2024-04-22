import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceShelterService } from 'src/app/services/service-shelter.service';

@Component({
  selector: 'app-update-service-shelter',
  templateUrl: './update-service-shelter.component.html',
  styleUrls: ['./update-service-shelter.component.css']
})
export class UpdateServiceShelterComponent {
  service: any;
  id: any;
  shelters: any; // Liste des shelters disponibles
  updatedServices :any[] = [];
  constructor(private act: ActivatedRoute, private serviceShelterService: ServiceShelterService, private router: Router) { }

  update() {
    // Ajouter le service actuel à la liste des services mis à jour
    const updatedService = { ...this.service }; // Copie du service pour éviter la modification directe du service dans le tableau
    this.updatedServices.push(updatedService);

    // Appeler la méthode pour mettre à jour tous les services avec les abris associés
    this.serviceShelterService.updateAllServicesWithShelters(this.updatedServices)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/listService']);
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    
    // Récupérer la liste des shelters
    this.serviceShelterService.getAllShelters()
      .subscribe(
        res => {
          this.shelters = res;
        },
        err => {
          console.log(err);
        }
      );

    this.serviceShelterService.getServiceById(this.id)
      .subscribe(
        res => {
          this.service = res;
        },
        err => {
          console.log(err);
        }
      );
  }
}