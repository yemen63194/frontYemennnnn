import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { MaladieService } from 'src/app/services/maladie.service';

@Component({
  selector: 'app-modifier-food',
  templateUrl: './modifier-food.component.html',
  styleUrls: ['./modifier-food.component.css']
})
export class ModifierFoodComponent implements OnInit {
  constructor(private foodService: FoodService, private maladieService: MaladieService,
              private router: Router, private activatedRoute: ActivatedRoute) {}

  med: {
    nomIngredient: string,
    quantite: number,
    dateAjout: string,
    calorie: number,
    maladies: any[]
  } = {
    nomIngredient: '',
    quantite: 0,
    dateAjout: '',
    calorie: 0.0,
    maladies: []
  };

  maladies: any[] = [];
  id: any;
  routeSub!: Subscription;

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    // Récupérer l'ingrédient à modifier et ses maladies associées
    this.foodService.getFood(this.id).subscribe(p => {
      this.med = p;
      // Marquer les maladies déjà associées comme sélectionnées
      this.med.maladies.forEach(maladie => {
        const index = this.maladies.findIndex(m => m.id === maladie.id);
        if (index !== -1) {
          this.maladies[index].checked = true;
        }
      });
    });

    // Charger la liste de toutes les maladies
    this.maladieService.listeMaladies().subscribe(res => {
      this.maladies = res;
    });
  }

  isMaladieSelected(maladie: any): boolean {
    return this.med.maladies.some(m => m.id === maladie.id);
  }

  toggleMaladie(maladie: any) {
    const index = this.med.maladies.findIndex((m: any) => m.id === maladie.id);
    if (index !== -1) {
      this.med.maladies.splice(index, 1); // Retirer la maladie si elle est déjà sélectionnée
    } else {
      this.med.maladies.push(maladie); // Ajouter la maladie si elle n'est pas déjà sélectionnée
    }
  }

  modifier() {
    this.foodService.modifierFood(this.med).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/listeIngredients']);
      },
      err => {
        console.log(err); 
      }
    );
  }
}
