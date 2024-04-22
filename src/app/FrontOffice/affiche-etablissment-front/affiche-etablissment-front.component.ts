import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-affiche-etablissment-front',
  templateUrl: './affiche-etablissment-front.component.html',
  styleUrls: ['./affiche-etablissment-front.component.css']
})
export class AfficheEtablissmentFrontComponent {
  etablissements: any; 
  constructor(private shared: EtablissementService,private router:Router) {}
  selectedItem: any;

  openModal(item: any) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
  ngOnInit(): void {
    this.shared.listeEtablissement()
      .subscribe(
        res => {
          console.log(res);
          this.etablissements = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }
}
