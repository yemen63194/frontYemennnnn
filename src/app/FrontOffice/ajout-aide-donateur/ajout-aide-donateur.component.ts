import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DonateurService } from 'src/app/services/donateur.service';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-ajout-aide-donateur',
  templateUrl: './ajout-aide-donateur.component.html',
  styleUrls: ['./ajout-aide-donateur.component.css']
})
export class AjoutAideDonateurComponent {
  constructor(private donateurService: DonateurService, private shelterService: ShelterService, private router: Router) {}

  donateur = {
    firstname: '',
    lastname: '',
    email: '',
    numeroTelephone: '',
  };

  aide = {
    description: '',
    duree: 0,
    montant: 0,
    quantiteClothes: 0, // Nouvelle propriété pour les vêtements
    typeMedicament: '', // Nouvelle propriété pour les médicaments
    quantiteMedication: 0, // Nouvelle propriété pour la quantité de médicaments
    surface: 0, // Nouvelle propriété pour l'espace supplémentaire
    address: '', // Nouvelle propriété pour l'adresse de l'espace supplémentaire
    typeAide: '',
  };
  selectedShelterId: number = 0;
  selectedShelter: any; // Déclaration de la variable selectedShelter
 
  idShelter: number = 0;
  shelters: any[] = []; 
  ngOnInit() {
    // Récupérer la liste des shelters lors du chargement du composant
    this.shelterService.getAllShelters().subscribe(
      (data: any) => {
        this.shelters = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ajoutDonateurAvecAideEtAffectShelter() {
    this.donateurService.ajouterAideDonateur(this.donateur, this.aide, this.selectedShelterId).subscribe(
      () => {
        // Réinitialiser les données du formulaire
        this.donateur = {
          firstname: '',
          lastname: '',
          email: '',
          numeroTelephone: '',
        };
        this.aide = {
          description: '',
          duree: 0,
          montant: 0,
          quantiteClothes: 0,
          typeMedicament: '',
          quantiteMedication: 0,
          surface: 0,
          address: '',
          typeAide: '',
        };
        this.selectedShelterId = 0;

        // Rediriger vers une autre page après l'ajout
        this.router.navigate(['/autre_page']);
      },
      (error: any) => {
        console.error('Erreur lors de la création du donateur avec aide et affectation au shelter :', error);
      }
    );
    }

    onShelterSelectionChange(event: any) {
      const selectedShelterId = event.target.value;
      this.selectedShelter = this.shelters.find(shelter => shelter.idShelter === Number(selectedShelterId));
    }

    onTypeAideChange() {
      if (this.aide.typeAide !== 'MONEY') {
        // Réinitialiser le montant si le type d'aide n'est pas de l'argent
        this.aide.montant = 0;
      }
  
      if (this.aide.typeAide !== 'VOLUNTEER_HOURS') {
        // Réinitialiser la durée si le type d'aide n'est pas des heures de bénévolat
        this.aide.duree = 0;
      }
    }

    isDescriptionVisible() {
      return this.aide.typeAide === 'CLOTHES' || this.aide.typeAide === 'MEDICAMENT' || this.aide.typeAide === 'ADDITIONAL_SPACE';
    }
  
    // Fonction pour obtenir le libellé du champ de description en fonction du type d'aide sélectionné
    getDescriptionLabel() {
      switch (this.aide.typeAide) {
        case 'CLOTHES':
          return 'Description des vêtements';
        case 'MEDICAMENT':
          return 'Description du médicament';
        case 'ADDITIONAL_SPACE':
          return 'Description de lespace supplémentaire';
        default:
          return 'Description';
      }
    }
}
