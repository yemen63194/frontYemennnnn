import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Cuisinier } from 'src/app/FrontOffice/models/Cuisinier';
import { FoodService } from 'src/app/services/food.service';
import { MaladieService } from 'src/app/services/maladie.service';

@Component({
  selector: 'app-ajouter-food',
  templateUrl: './ajouter-food.component.html',
  styleUrls: ['./ajouter-food.component.css']
})
export class AjouterFoodComponent implements OnInit {

  maladies: any[] = [];
  cuisinier_Connecter!: Cuisinier;

  food: {
    nomIngredient: string,
    quantite: number,
    calorie: number,
    dateAjout: string, // Changer le type en string
    malad: any[]
  } = {
    nomIngredient: '',
    quantite: 0,
    calorie: 0.0,
    dateAjout: new Date().toISOString(), // Utiliser new Date().toISOString() pour obtenir la date au format ISO
    malad: []
  };

  constructor(private toast: NgToastService,private service: FoodService, private ser: MaladieService, private router: Router) { }

  ngOnInit(): void {
    this.ser.listeMaladies().subscribe(res => {
      console.log(res);
      this.maladies = res;
    });
    const UserConnected_String = localStorage.getItem('CUISINIER');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    console.log(UserConnected)
    if (UserConnected) {
      this.cuisinier_Connecter = {
        idC: UserConnected.idC,
        user: UserConnected.user,
        nom: UserConnected.nom,
        prenom: UserConnected.prenom,
        dateAjout: UserConnected.dateAjout,
        salaire: UserConnected.salaire,
        disponiblee: UserConnected.disponiblee,
        sexe: UserConnected.sexe
      }
      
      console.log(this.cuisinier_Connecter.idC);
    }
  }
  showInfo() {
    this.toast.info({detail:"INFO",summary:'Ingredient ajouté avec succéé',sticky:true});
  }
  getMaladieIds(): number[] {
    return this.food.malad.map(maladie => maladie.id);
  }

  controleIngredient(malade: any) {
    const index = this.food.malad.findIndex(ing => ing.id === malade.id);
    if (index !== -1) {
      this.food.malad.splice(index, 1);
    } else {
      this.food.malad.push(malade);
    }
  }

  addMaladieToIngredient(malade: any) {
    this.food.malad.push(malade);
  }

  ajouter() {
    const ingredientDTO = {
      nomIngredient: this.food.nomIngredient,
      calorie: this.food.calorie,
      quantite: this.food.quantite,
      dateAjout: this.food.dateAjout,
      maladieIds: this.getMaladieIds()
    };

    this.service.addDTO(ingredientDTO).subscribe(
      res => {
        this.food = {
          nomIngredient: '',
          quantite: 0,
          calorie: 0,
          dateAjout: new Date().toISOString(),
          malad: []
        };
        console.log(res);
        this.showInfo()

        this.router.navigate(['/admin/listeIngredients']);
      },
      err => {
        console.error(err);
      }
    );
  }
}
