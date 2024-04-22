import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AideService } from 'src/app/services/aide.service';

@Component({
  selector: 'app-ajout-aide',
  templateUrl: './ajout-aide.component.html',
  styleUrls: ['./ajout-aide.component.css']
})
export class AjoutAideComponent {
  aide = {
    description: '',
    duree: 0,
    typeAide: '',
    montant:0,
  };

  constructor(public _shared: AideService, private router: Router) {}

  ajout() {
    this._shared.createNewAide(this.aide)
      .subscribe(
        res => {
          this.aide = {
            description: '',
            duree: 0,
            typeAide: '',
            montant:0,

          };
          this.router.navigate(['/admin/listAide']);
        },
        err => {
          console.log(err);
        }
      );
  }
}
