import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DonateurService } from 'src/app/services/donateur.service';

@Component({
  selector: 'app-list-donateur-avec-aide',
  templateUrl: './list-donateur-avec-aide.component.html',
  styleUrls: ['./list-donateur-avec-aide.component.css']
})
export class ListDonateurAvecAideComponent {

  donneesDonateurs: any = []; // Initialisation de la propriété ici
  typeAideFiltre: string = 'MONEY'; 
  constructor(private donateurService: DonateurService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getDonateurs();
  }

  getDonateurs() {
    this.donateurService.calculateTotalAmountAndSheltersList().subscribe(
      (data: any) => { // Utilisez le type de données attendu (any[])
        // Filtrer les donateurs en fonction du type d'aide sélectionné
        this.donneesDonateurs = data.filter((donateur: any) => this.filtrerDonateur(donateur));
      },
      err => {
        console.log(err);
      }
    ); 
  }

  // Méthode pour filtrer les donateurs en fonction du type d'aide sélectionné
  filtrerDonateur(donateur: any): boolean {
    switch(this.typeAideFiltre) {
      case 'MONEY':
        return donateur.montantTotal > 0;
      case 'CLOTHES':
        return donateur.quantiteTotaleVetements > 0;
      case 'MEDICAMENT':
        return donateur.quantiteTotaleMedicaments > 0;
      case 'VOLUNTEER_HOURS':
        return donateur.dureeTotaleHeuresVolontariat > 0;
      case 'ADDITIONAL_SPACE':
        return donateur.surfaceTotaleEspace > 0;
      default:
        return true; // Par défaut, afficher tous les donateurs
    }
  }

   

  // Méthode pour attribuer le type de badge en fonction du type d'aide
  determinerTypeBadge(typeAide: string, donnee: any): string {
    switch(typeAide) {
      case 'MONEY' :
      if (donnee.montantTotal > 1000) {
        return 'best';
      } else if (donnee.montantTotal >= 500 && donnee.montantTotal <= 1000) {
        return 'silver';
      } else {
        return 'bronze';
      }
      case 'CLOTHES':
        if (donnee.quantiteTotaleVetements > 50) {
          return 'best';
        } else if (donnee.quantiteTotaleVetements >= 20 && donnee.quantiteTotaleVetements <= 50) {
          return 'silver';
        } else {
          return 'bronze';
        }
      case 'VOLUNTEER_HOURS':
        if (donnee.dureeTotaleHeuresVolontariat > 200) {
          return 'best';
        } else if (donnee.dureeTotaleHeuresVolontariat >= 100 && donnee.dureeTotaleHeuresVolontariat <= 200) {
          return 'silver';
        } else {
          return 'bronze';
        }
      case 'MEDICAMENT':
        if (donnee.quantiteTotaleMedicaments > 100) {
          return 'best';
        } else if (donnee.quantiteTotaleMedicaments >= 50 && donnee.quantiteTotaleMedicaments <= 100) {
          return 'silver';
        } else {
          return 'bronze';
        }
      case 'ADDITIONAL_SPACE':
        if (donnee.surfaceTotaleEspace > 200) {
          return 'best';
        } else if (donnee.surfaceTotaleEspace >= 100 && donnee.surfaceTotaleEspace <= 200) {
          return 'silver';
        } else {
          return 'bronze';
        }
      default:
        return '';
    }
  }

changerTypeAideFiltre(typeAide: string) {
  this.typeAideFiltre = typeAide;
  this.getDonateurs(); // Récupérer à nouveau les donateurs en fonction du nouveau filtre
}
changerTypeAide() {
  this.getDonateurs(); // Appel de la méthode pour récupérer les donateurs en fonction du nouveau filtre
}

genererURLCarte(adresse: string): SafeResourceUrl {
  const encodedAddress = encodeURIComponent(adresse);
  const addressQuery = encodedAddress.replace(/%20/g, '+');
  const apiKey = 'AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap'; // Replace 'YOUR_API_KEY' with your actual API key
  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${addressQuery}`;

  https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap

  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
}