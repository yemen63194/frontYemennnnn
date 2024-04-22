import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaladieService } from 'src/app/services/maladie.service';

@Component({
  selector: 'app-ajouter-maladie',
  templateUrl: './ajouter-maladie.component.html',
  styleUrls: ['./ajouter-maladie.component.css']
})
export class AjouterMaladieComponent {

  
  constructor( private service:MaladieService,private router:Router,) {

  }
  maladie = {
    nom: ''
  };




  ajouterMaladie(){
    this.service.ajouterMaladie(this.maladie,).subscribe(
      res => {
        this.maladie = {
          nom: ''
        };
        console.log(res)
        this.router.navigate(['/admin/listeMaladies']);
      },
      err => {
        console.log(err); 
      }
    );  }

}
