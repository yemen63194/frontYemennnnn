import { Component } from '@angular/core';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-affiche-cause',
  templateUrl: './affiche-cause.component.html',
  styleUrls: ['./affiche-cause.component.css']
})
export class AfficheCauseComponent {
  shelterDonations: any[] = []; // Utilisez un tableau pour stocker les dons de plusieurs abris

  constructor(private shelterService: ShelterService) { }

  ngOnInit(): void {
    this.getAllShelterDonations();
  }
  updateCause() {
    this.shelterDonations.forEach(shelterDonation => {
      if (this.calculateProgress(shelterDonation) >= 100) {
        shelterDonation.visible = false; // Ne pas afficher cet abri dans le front-end
      }
    });
  }
  getAllShelterDonations() {
    this.shelterService.getAllShelterDonations().subscribe(
      (data: any) => {
        this.shelterDonations = data;
        this.shelterDonations = this.shelterDonations.filter(shelterDonation => {
          return this.calculateProgress(shelterDonation) < 100;
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  calculateProgress(shelterDonation: any): number {
    return (shelterDonation.montantTotalAide / shelterDonation.objectifFinancier) * 100;
  }
  // updateCause() { // Correction: suppression du paramètre shelterDonation
  //   // Parcourir les dons de l'abri pour vérifier la progression
  //   this.shelterDonations.forEach(shelterDonation => {
  //     // Vérifiez si la progression atteint ou dépasse 100%
  //     if (this.calculateProgress(shelterDonation) >= 100) {
  //       this.shelterService.deleteCauseFromShelter(shelterDonation.idShelter).subscribe(
  //         () => {
  //           // Supprimez la cause de la liste shelterDonations
  //           const index = this.shelterDonations.indexOf(shelterDonation);
  //           if (index !== -1) {
  //             this.shelterDonations.splice(index, 1);
  //           }
  //           // Affichez une notification de succès à l'utilisateur si nécessaire
  //         },
  //         (error) => {
  //           console.error('Failed to remove cause:', error);
  //           // Affichez une notification d'échec à l'utilisateur si nécessaire
  //         }
  //       );
  //     }
  //   });
  // }
 
}
