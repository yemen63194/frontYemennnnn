import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-affiche-plat-existe',
  templateUrl: './affiche-plat-existe.component.html',
  styleUrls: ['./affiche-plat-existe.component.css']
})
export class AffichePlatExisteComponent {

  plats: any; 
  ingredients: any[] = [];
  isAddingPlat: boolean = false; // Variable pour suivre le mode d'affichage
  plat: {
    nomPlat: string,
    descPlat: string,
    typePlat: string[],
    prixPlat: number,
    ingred: any[]
  } = {
    nomPlat: '',
    descPlat: '',
    typePlat: [],
    prixPlat: 0.0,
    ingred: []
  };
  typesPlat = [
    'FAIBLE_GLUCIDES',
    'RICHE_FIBRES',
    'FAIBLE_SODIUM',
    'RICHE_PROTEINES_MAIGRES',
    'RICHE_ANTIOXYDANTS',
    'FACILE_A_MACHER_DIGER',
    'ADAPTE_ALLERGIES',
    'REGIME_SPECIFIQUE'
  ];

  constructor(private shared: PlatService, private serv: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.shared.listePlatsParResto(1).subscribe(
      res => {
        console.log(res);
        this.plats = res;
      },
      err => {
        console.log(err);
      }
    ); 
    this.serv.listeFood().subscribe(res => {
      console.log(res);
      this.ingredients = res;
    });

 
    
  }
  selectedPlat :any[]=[]

fonctionAjouterPlatToRepas( id:number){
  const index = this.plats.findIndex((plat:any) => plat.idPlat === id);
  if (index !== -1) {
    this.selectedPlat.splice(index, 1);
  } else {
    this.selectedPlat.push(id);
  }
  }
  controleIngredient(ingredient: any) {
    const index = this.plat.ingred.findIndex(ing => ing.idIngredient === ingredient.idIngredient);
    if (index !== -1) {
      this.plat.ingred.splice(index, 1);
    } else {
      this.plat.ingred.push(ingredient);
    }
  }

  addIngredientToPlat(ingredient: any) {
    this.plat.ingred.push(ingredient);
  }

  // Fonction pour basculer vers le formulaire d'ajout de plat
  AjouterPlat() {
    this.isAddingPlat = true;
  }

  // Fonction pour annuler l'ajout de plat et revenir à l'affichage des plats
  AnnulerAjoutPlat() {
    this.isAddingPlat = false;
    this.plat = {  // Réinitialiser le formulaire
      nomPlat: '',
      descPlat: '',
      typePlat: [],
      prixPlat: 0.0,
      ingred:[]
    };
  }

  // Fonction pour ajouter un plat
  ajouterPlat() {
    // Vérifier si tous les champs sont remplis
    // if (
    //   this.plat.nomPlat.trim() === '' ||
    //   this.plat.descPlat.trim() === '' ||
    //   // this.plat.typePlat.length === 0 ||
    //   this.plat.prixPlat <= 0
    // ) {
    //   alert('Veuillez remplir tous les champs requis.');
    //   return;
    // }

    const platDTO = {
      nomPlat: this.plat.nomPlat,
      descPlat: this.plat.descPlat,
      prixPlat: this.plat.prixPlat,
      ingredientIds: this.plat.ingred.map(ingredient => ingredient.idIngredient)
    };
    this.shared.ajouterPlat(platDTO,1).subscribe(
      res => {
        this.plat = {
          nomPlat: '',
          descPlat: '',
          typePlat: [],
          prixPlat: 0.0,
          ingred: []
        };
        console.log(res);
        this.shared.listePlats().subscribe(
          updatedPlats => {
            this.plats = updatedPlats;
          },
          err => {
            console.log(err);
          }
        );
        this.AnnulerAjoutPlat();
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(idPlat: number) {
if(window.confirm('are u sure delete this plat')){
    this.shared.supprimerPlats(idPlat).subscribe(
      res => {
        console.log(res);
        // Actualiser la liste des plats
        this.shared.listePlats().subscribe(
          updatedPlats => {
            this.plats = updatedPlats;
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }
}

  // Fonction pour modifier un plat
  modifierPlat(id: any) {
    // Logique pour modifier un plat et rediriger vers le formulaire d'édition
    this.router.navigate(['admin/modifierPlat/' + id]);
  }

 



  likePlat(platId: any): void {
    this.shared.likeDislike(1, platId, 'LIKE').subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
    window.location.reload();

  }

  
  dislikePlat(platId: any): void {
    this.shared.likeDislike(1, platId, 'DISLIKE').subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    window.location.reload();

  }
  nbrLikes: number = 0;
  nbrDislikes: number = 0;

  
  
}
