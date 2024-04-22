import { Component } from '@angular/core';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-list-shelter',
  templateUrl: './list-shelter.component.html',
  styleUrls: ['./list-shelter.component.css']
})
export class ListShelterComponent {
  shelters: any;
  filteredShelters: any;
  searchTerm: string = '';
  sortBy: string = ''; // Variable pour stocker le critère de tri actuel
  sortOrder: string = 'asc'; // Variable pour stocker l'ordre de tri actuel

  constructor(public _shared: ShelterService) {}

  ngOnInit(): void {
    this._shared.getAllShelters()
      .subscribe(
        res => {
          console.log(res);
          this.shelters = res;
          this.filteredShelters = this.shelters; // Initialisation des abris filtrés avec tous les abris
        },
        err => {
          console.log(err);
        }
      );
  }

  delete(id: number) {
    console.log("Deleting shelter with ID:", id);
    this._shared.deleteShelter(id)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit(); // Rafraîchir la liste des abris après la suppression
        },
        err => {
          console.log(err);
        }
      );
  }

  // Fonction de filtre pour filtrer les abris en fonction du terme de recherche
  filterShelters(): void {
    this.filteredShelters = this.shelters.filter((shelter: any) =>
      shelter.nomShelter.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    
  }
  
}
