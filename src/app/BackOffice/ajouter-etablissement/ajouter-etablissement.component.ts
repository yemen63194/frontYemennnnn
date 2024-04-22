import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-ajouter-etablissement',
  templateUrl: './ajouter-etablissement.component.html',
  styleUrls: ['./ajouter-etablissement.component.css']
})
export class AjouterEtablissementComponent {



  constructor(private service:EtablissementService,private router:Router,) {

  }
  etab = {
    nomEtab: '',
    numFixe: '',
    adresse: '',
    typeEtab: '',
    nbLits: 0,
    prixNuit: 0.0

  };




  ajouterEtablissement(){
    this.service.ajouterEtablissement(this.etab,).subscribe(
      res => {
        this.etab = {
          nomEtab: '',
          numFixe: "",
          adresse: "",
          typeEtab: "",
          nbLits: 0,
          prixNuit: 0.0
        
        };
        console.log(res)
        this.router.navigate(['/admin/listeEtablissement']);

      },
      err => {
        console.log(err); 
      }
    );





  }
}
