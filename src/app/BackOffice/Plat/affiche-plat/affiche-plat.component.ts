import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-affiche-plat',
  templateUrl: './affiche-plat.component.html',
  styleUrls: ['./affiche-plat.component.css']
})
export class AffichePlatComponent {
  searchText: string = '';
  page: number = 1; // Page actuelle
  pageSize: number = 4;
  plats: any; 
  constructor(private shared: PlatService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listePlats()
      .subscribe(
        res => {
          console.log(res);
          this.plats = res;
        },
        err => {
          console.log(err);
        }
      ); 
  

 
  }

  
  AjouterPlat(){
    console.log("btn");
    this.router.navigate(['admin/ajouterPlats']);
  }
  deleteT(idPlat: number) {
    console.log("Deleting aide with ID:", idPlat);
    this.shared.supprimerPlats(idPlat)
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
  modifierPlat(id:any){
    this.router.navigate(['admin/modifierPlat/'+id])
  }
}
