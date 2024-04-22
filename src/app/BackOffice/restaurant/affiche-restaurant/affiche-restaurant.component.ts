import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-affiche-restaurant',
  templateUrl: './affiche-restaurant.component.html',
  styleUrls: ['./affiche-restaurant.component.css']
})
export class AfficheRestaurantComponent {
  searchText: string = '';
  page: number = 1; 
  pageSize: number = 2;
  restaurants: any; 
  constructor(private shared: RestaurantService,private router:Router) {}

  
  ngOnInit(): void {
    this.shared.listeRestaurant()
      .subscribe(
        res => {
          console.log(res);
          this.restaurants = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }

  Ajouter(){
    this.router.navigate(['admin/ajouterRestaurant'])
  }
  delete(idR: number) {
    console.log("Deleting aide with ID:", idR);
    this.shared.supprimerRestaurant(idR)
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
  modifier(id:any){
    this.router.navigate(['admin/modifierRestaurant/'+id])
  }

}
