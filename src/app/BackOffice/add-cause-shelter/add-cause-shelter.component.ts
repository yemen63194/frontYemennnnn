import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-add-cause-shelter',
  templateUrl: './add-cause-shelter.component.html',
  styleUrls: ['./add-cause-shelter.component.css']
})
export class AddCauseShelterComponent {
  causeData = {
    cause: '',
    imageCause: '', // Modifier le type de données en fonction de vos besoins
    objectifFinancier: '',
  };
  selectedShelterId: number = 0;
  shelters: any[] = [];
  selectedShelter: any; // Déclaration de la variable selectedShelter
  errorMessage: string = '';
successMessage: string = '';
  constructor(private shelterService: ShelterService, private router: Router) { }

  ngOnInit() {
    // Récupérer la liste des shelters lors du chargement du composant
    this.shelterService.getAllShelters().subscribe(
      (data: any) => {
        this.shelters = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addCause() {
    if (this.selectedShelterId === 0) {
      this.errorMessage = 'Veuillez sélectionner un shelter.';
      return;
    }

    // Récupérer le shelter sélectionné

    // Vérifier si le shelter sélectionné existe
   

    // Ajouter la cause au shelter
    this.shelterService.addCauseToShelter(this.selectedShelterId, this.causeData).subscribe(
      () => {
        this.successMessage = 'Cause ajoutée avec succès.';
        this.errorMessage = ''; // Effacez le message d'erreur précédent s'il y en avait un
        // Réinitialiser les données du formulaire
        // Réinitialiser les données du formulaire
        this.causeData = {
          cause: '',
          imageCause: '', // Modifier le type de données en fonction de vos besoins
          objectifFinancier: '',
        };
        this.selectedShelterId = 0;
    //    this.router.navigate(['/admin/listCause']);
      },
      (err) => {
        this.errorMessage = 'Cet abri a déjà une cause en cours. Vous ne pouvez pas ajouter une nouvelle cause. ' ;
        console.error(err);
      }
    );

  }

  // Fonction appelée lorsque la sélection du shelter change
  onShelterSelectionChange(event: any) {
    const selectedShelterId = event.target.value;
    this.selectedShelter = this.shelters.find(shelter => shelter.idShelter === Number(selectedShelterId));
  }
}
