import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-affiche-medicament',
  templateUrl: './affiche-medicament.component.html',
  styleUrls: ['./affiche-medicament.component.css']
})
export class AfficheMedicamentComponent {
  medicaments: any; 
  constructor(private shared: MedicamentService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listeMedicament()
      .subscribe(
        res => {
          console.log(res);
          this.medicaments = res;
        },
        err => {
          console.log(err);
        }
      ); 
  

 
  }

  
  AjouterMed(){
    this.router.navigate(['admin/ajouterMedicament'])
  }
  delete(idMed: number) {
    console.log("Deleting aide with ID:", idMed);
    this.shared.supprimerMedicament(idMed)
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
  modifierM(id:any){
    this.router.navigate(['admin/modifierMedicament/'+id])
  }
  }
