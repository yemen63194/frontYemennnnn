import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RepasService } from 'src/app/services/repas.service';

@Component({
  selector: 'app-list-repas',
  templateUrl: './list-repas.component.html',
  styleUrls: ['./list-repas.component.css']
})
export class ListRepasComponent {
  repas: any; 
  constructor(private shared: RepasService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listeRepas()
      .subscribe(
        res => {
          console.log(res);
          this.repas = res;
        },
        err => {
          console.log(err);
        }
      ); 
  

 
  }

  
  AjouterRepas(){
    console.log("btn");
    this.router.navigate(['admin/ajouterPlats']);
  }
  delete(id: number) {
    console.log("Deleting aide with ID:", id);
    this.shared.supprimerRepas(id)
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
  modifierRepas(id:any){
    this.router.navigate(['admin/modifierPlat/'+id])
  }

}
