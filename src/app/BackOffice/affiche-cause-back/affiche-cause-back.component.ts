import { Component } from '@angular/core';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-affiche-cause-back',
  templateUrl: './affiche-cause-back.component.html',
  styleUrls: ['./affiche-cause-back.component.css']
})
export class AfficheCauseBackComponent {

  shelterDonations: any[] = [];
  ourAchievements: any[] = [];

  constructor(private shelterService: ShelterService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.shelterService.getAllShelterDonations().subscribe(
      (data: any) => {
        this.shelterDonations = data;
        this.checkProgressAndHandleAchievement();
      },
      (error: any) => {
        console.log('Error fetching shelter donations:', error);
      }
    );

    this.shelterService.getAllAchievements().subscribe(
      (data: any) => {
        this.ourAchievements = data;
      },
      (error: any) => {
        console.log('Error fetching achievements:', error);
      }
    );
  }

  checkProgressAndHandleAchievement(): void {
    for (const donation of this.shelterDonations) {
      const progress = this.calculateProgress(donation);
      if (progress >= 100) {
        this.deleteCauseAndFillAchievement(donation.idShelter);
      }
    }
  }

  calculateProgress(shelterDonation: any): number {
    return (shelterDonation.montantTotalAide / shelterDonation.objectifFinancier) * 100;
  }

  deleteCauseAndFillAchievement(shelterId: number): void {
    this.shelterService.checkProgressAndHandleAchievement(shelterId).subscribe(
      () => {
        console.log('Cause deleted and added as achievement successfully.');
        // Rafraîchir la liste des données après l'opération
        this.getAllData();
      },
      (error: any) => {
        console.log('Error occurred while deleting cause and adding achievement:', error);
      }
    );
  }

  deleteShelter(id: number): void {
    console.log('Deleting shelter with ID:', id);
    this.shelterService.deleteShelter(id).subscribe(
      () => {
        console.log('Shelter deleted successfully.');
        // Rafraîchir la liste des données après la suppression
        this.getAllData();
      },
      (error: any) => {
        console.log('Error deleting shelter:', error);
      }
    );
  }
  // deleteCause(shelterId: number) {
  //   console.log("Deleting shelter with ID:", shelterId);
  //   this.shelterService.deleteCauseFromShelter(shelterId).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       // Ajouter la cause à "Our Achievement" seulement si elle n'est pas déjà présente
  //       if (!this.ourAchievements.includes(res)) {
  //         this.ourAchievements.push(res);
  //       }
  //       // Mettre à jour shelterDonations sans appeler ngOnInit()
  //       this.shelterDonations = this.shelterDonations.filter(donation => donation.idShelter !== shelterId);
  //     },
  //     (err: any) => {
  //       console.log(err);
  //     }
  //   );
  // }

}
