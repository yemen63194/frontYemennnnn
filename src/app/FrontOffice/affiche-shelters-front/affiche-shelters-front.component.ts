import { Component } from '@angular/core';
import { ShelterService } from 'src/app/services/shelter.service';
import { ServicesModalComponent } from '../services-modal/services-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { error } from 'jquery';
import { Router, RouterLink } from '@angular/router';
import { Homeless } from '../models/Homeless';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-affiche-shelters-front',
  templateUrl: './affiche-shelters-front.component.html',
  styleUrls: ['./affiche-shelters-front.component.css']
})
export class AfficheSheltersFrontComponent {
  shelters:any ; 
  constructor(public _shared:ShelterService,public dialog: MatDialog,router:Router){}

  
  homless_Connecter!: Homeless;
  
ngOnInit():void {
  
  this._shared.getAllShelters()
    .subscribe(
      res=>{
        console.log(res);
        this.shelters = res
      },
      err =>{
        console.log(err);
      }
    ); 
    const UserConnected_String = localStorage.getItem('HOMELESS');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    console.log(UserConnected)
    if (UserConnected) {
      this.homless_Connecter = {
        idHomeless: UserConnected.idHomeless,
        user: UserConnected.user,
        age: UserConnected.age,
        smedicale: UserConnected.smedicale,
        bmpecifiques: UserConnected.bmpecifiques,
        lmctuelle: UserConnected.lmctuelle,
        smociale: UserConnected.smociale,
       
      }
      
      console.log("/////////////////",this.homless_Connecter.idHomeless);
    }
    
  }
  openServicesModal(shelterId: number): void {
    // Récupérer tous les services associés à l'abri spécifié
    this._shared.getShelterById(shelterId).subscribe(
      shelter => {
        // Récupérer les services associés à cet abri
        this._shared.getServicesByShelterId(shelterId).subscribe(
          services => {
            // Ouvrir un pop-up avec les services et les détails du shelter
            const dialogRef = this.dialog.open(ServicesModalComponent, {
              width: '600px',
               data: { shelter: shelter, services: services }
            });
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }

  affecter(idShelter: number) {
    this._shared.affectHomelessToShelter(this.homless_Connecter.idHomeless, idShelter)
      .subscribe(
        res => {
          console.log('Réponse réussie:', res);
          alert("Votre demande a été bien prise en compte, un Email de confirmation vous a été envoyé.");
                },
        error => {
          console.log('Erreur:', error); // Affiche l'objet d'erreur complet dans la console
          if (error.status === 400) {
            console.log('////////', error.error);
            alert(error.error);
          } else {
            alert("Quelque chose s'est mal passé");
          }
        }
      );
  }
  

}
