import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaladieService } from 'src/app/services/maladie.service';

@Component({
  selector: 'app-liste-maladie',
  templateUrl: './liste-maladie.component.html',
  styleUrls: ['./liste-maladie.component.css']
})
export class ListeMaladieComponent {
  searchText: string = '';
  page: number = 1; // Page actuelle
  pageSize: number = 2;
  maladies: any; 
  constructor(private shared: MaladieService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listeMaladies()
      .subscribe(
        res => {
          console.log(res);
          this.maladies = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }

  delete(id: number) {
    console.log("Deleting aide with ID:", id);
    this.shared.supprimerMaladie(id)
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
    this.router.navigate(['admin/ajouterMaladie'])
  }
  buttonModifier(id:any){
    this.router.navigate(['admin/modofierMaladie/'+id])
  }

}
