import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-ajouter-medicament',
  templateUrl: './ajouter-medicament.component.html',
  styleUrls: ['./ajouter-medicament.component.css']
})
export class AjouterMedicamentComponent {
  constructor(private service:MedicamentService,private router:Router,) {

  }
  med = {
    nomMed: '',
    image:'',
    DescMed: '',
    CatMedicament: '',
    dateMed: '',
    prixMed: 0.0

  };
  CatMedicament = [
    'ANALGESIQUE',
    'ANTIBIOTIQUE',
    'ANTIVIRAL',
    'ANTIINFLAMMATOIRE',
    'ANTIDEPRESSEUR',
    'ANTIPSYCHOTIQUE',
    'HYPOTENSEUR',
    'DIURETIQUE',
    'VACCIN'
  ];




  ajouterMedicament(){
    this.service.ajouterMedicament(this.med,).subscribe(
      res => {
        this.med = {
          nomMed: '',
          image:'',
          DescMed: "",
          CatMedicament: "",
          dateMed: "",
          prixMed: 0.0,
        
        };
        console.log(res)
        this.router.navigate(['/admin/listeMedicaments']);

      },
      err => {
        console.log(err); 
      }
    );
  }
}
