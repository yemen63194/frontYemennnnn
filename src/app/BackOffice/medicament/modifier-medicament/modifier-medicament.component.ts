import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-modifier-medicament',
  templateUrl: './modifier-medicament.component.html',
  styleUrls: ['./modifier-medicament.component.css']
})
export class ModifierMedicamentComponent {

  constructor(private service:MedicamentService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
  med:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {

    this.med={
      nomMed: null,
      image:null,
      descMed: null,
      CatMedicament: null,
      dateMed: null,
      prixMed: null

    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getMedicament(this.id).subscribe(p =>{
      console.log(p);
      this.med = p;
    
    });
  
  }


  modifierMedicament(){
    this.service.modifierMedicament(this.med,).subscribe(
      res => {
        this.med = {
          nomMed: '',
          descMed: '',
          image:'',
          CatMedicament: '',
          dateMed: '',
          prixMed: 0.0
        
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
