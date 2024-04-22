import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-listeetablissement',
  templateUrl: './listeetablissement.component.html',
  styleUrls: ['./listeetablissement.component.css']
})
export class ListeetablissementComponent {
  etablissements: any; 
  constructor(private shared: EtablissementService,private router:Router) {}

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

  delete(id: number) {
    console.log("Deleting aide with ID:", id);
    this.shared.supprimerEtablissement(id)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      ); 

     
  }
  buttonAjouter(){
    this.router.navigate(['admin/ajouterEtablissement'])
  }
  buttonModifier(id:any){
    this.router.navigate(['admin/modifierEtablissement/'+id])
  }
}
