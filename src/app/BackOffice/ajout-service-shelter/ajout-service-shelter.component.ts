import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceShelterService } from 'src/app/services/service-shelter.service';

@Component({
  selector: 'app-ajout-service-shelter',
  templateUrl: './ajout-service-shelter.component.html',
  styleUrls: ['./ajout-service-shelter.component.css']
})
export class AjoutServiceShelterComponent {
  service = {
    nomService: '',
    description: '',
    typeService: ''
  };

  constructor(public _shared: ServiceShelterService, private router: Router) {}

  ajout() {
    this._shared.createNewService(this.service)
      .subscribe(
        res => {
          this.service = {
            nomService: '',
            description: '',
            typeService: ''
          };
          this.router.navigate(['/admin/listService']);
        },
        err => {
          console.log(err);
        }
      );
  }
}
