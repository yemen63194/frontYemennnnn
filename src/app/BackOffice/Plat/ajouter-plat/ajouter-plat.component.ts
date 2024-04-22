import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuisinier } from 'src/app/FrontOffice/models/Cuisinier';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { FoodService } from 'src/app/services/food.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-ajouter-plat',
  templateUrl: './ajouter-plat.component.html',
  styleUrls: ['./ajouter-plat.component.css']
})
export class AjouterPlatComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  ingredients: any[] = [];
  cuisinier_Connecter!: Cuisinier;
  selectedImageFile: File | undefined;
  imageURL: string | undefined;
  plat: {
    nomPlat: string,
    descPlat: string,
    typePlat: string,
    typeRepas: string,
    image: string,
    prixPlat: number,
    ingred: any[]
  } = {
    nomPlat: '',
    descPlat: '',
    typePlat: '',
    typeRepas: '',
    image:'',
    prixPlat: 0.0,
    ingred: []
  };

  

  constructor(private srvc: BrahmiUploadService,private service: PlatService, private serv: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.serv.listeFood().subscribe(res => {
      console.log(res);
      this.ingredients = res;
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
  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.srvc.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.plat.image  = response.imageURL;
           
            callback();
          } else {
            console.error('Error: Image URL not found in response.');
            callback();
          }
        },
        error => {
          console.error('Error uploading image:', error);
          callback();
        }
      );
    } else {
      console.error('No image selected');
      callback();
    }
  }
  ajouterPlat() {

    this.ajouterImage(() => {

    const platDTO = {
      nomPlat: this.plat.nomPlat,
      descPlat: this.plat.descPlat,
      typeRepas: this.plat.typeRepas,
      prixPlat: this.plat.prixPlat,
      typePlat: this.plat.typePlat,
      image: this.plat.image,
      ingredientIds: this.plat.ingred.map(ingredient => ingredient.idIngredient)
    };

    this.service.ajouterPlat(platDTO,this.cuisinier_Connecter.idC).subscribe(
      res => {
        this.plat = {
          nomPlat: '',
          descPlat: '',
          typePlat: '',
          typeRepas: '',
          image: '',
          prixPlat: 0.0,
          ingred: []
        };
        console.log(res);
        this.router.navigate(['/admin/listePlats']);
      },
      err => {
        console.log(err);
      }
    );
  });

  }
}