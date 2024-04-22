import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';
import { RepasService } from 'src/app/services/repas.service';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-afficher-repas',
  templateUrl: './afficher-repas.component.html',
  styleUrls: ['./afficher-repas.component.css'],
})
export class AfficherRepasComponent implements OnInit {
  patient_Connecter!: Patient;

  allPlats: any[] = [];
  breakFastPlats: any[] = [];
  lunchPlats: any[] = [];
  dinnerPlats: any[] = [];
  timeFor = '';
  currentRepas: { entree: any; principale: any; dessert: any } = {
    entree: null,
    principale: null,
    dessert: null,
  };
  constructor(
    private platService: PlatService,
    private repasService: RepasService
  ) {}
  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('Patient');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    console.log(UserConnected)
    if (UserConnected) {
      this.patient_Connecter = {
        idpatient: UserConnected.idpatient,
        user: UserConnected.user,
        typePatient: UserConnected.typePatient,
        archiver: UserConnected.archiver,
        poid: UserConnected.poid,
        longueur: UserConnected.longueur,
        dateDeNaissance: UserConnected.dateDeNaissance,
        sexe: UserConnected.sexe

      }
      
      console.log(this.patient_Connecter.idpatient);
    }
    this.platService.listePlatsParResto(this.patient_Connecter.idpatient).subscribe(plats=>{console.log(plats); this.allPlats=plats;
    
    
   console.log(this.allPlats)
    this.allPlats.forEach((plat) => {
      switch (plat.typeRepas) {
        case 'PETIT_DEJEUNER':
          this.breakFastPlats.push(plat);
          break;
        case 'DEJEUNER':
          this.lunchPlats.push(plat);
          break;

        case 'DINER':
          this.dinnerPlats.push(plat);
          break;
        default:
          this.dinnerPlats.push(plat);
          this.lunchPlats.push(plat);
          this.breakFastPlats.push(plat);
          break;
      }
    });
  });
    setInterval(() => {
      let now = new Date().getHours();
      if (now >= 1 && now < 7) {
        this.timeFor = 'PETIT_DEJEUNER';
      } else if (now >= 10 && now < 17) {
        this.timeFor = 'DEJEUNER';
      } else if (now >= 14 && now < 23) {
        this.timeFor = 'DINER';
      } else {
        this.timeFor = 'none';
      }
    }, 1000);
  }

  addPlatToRepas(id: number) {
    console.log('id Repas', id);
    let plat = this.allPlats.filter((plat) => plat.idPlat === id)[0];
    console.log(plat)
    if (plat.typeRepas !== this.timeFor) {
      return;
    }
    switch (plat.typePlat) {
      case 'Entree':
        if(this.currentRepas.entree?.idPlat===id){
          this.currentRepas.entree=null
        }
        else{
          this.currentRepas.entree = plat;
           }
        break;
      case 'Principale':
        if(this.currentRepas.principale?.idPlat===id){
          this.currentRepas.principale=null
        }
        else{
          this.currentRepas.principale = plat;
           }
        break;
      case 'Dessert':
        if(this.currentRepas.dessert?.idPlat===id){
          this.currentRepas.dessert=null
        }
        else{
          this.currentRepas.dessert = plat;
           }
        break;
      default:
        break;
    }
    console.log('current Repas', this.currentRepas);
  }
  validateSelection() {
    this.repasService.ajouterRepas(this.patient_Connecter.idpatient,{
      typeRepas: this.timeFor,
      platsIds: [
        this.currentRepas.entree?.idPlat?this.currentRepas.entree.idPlat : null,
        this.currentRepas.principale?.idPlat?this.currentRepas.principale.idPlat:null,
        this.currentRepas.dessert?.idPlat?this.currentRepas.dessert.idPlat:null,
      ],
      
    })
    .subscribe(resultat =>console.log(resultat));
console.log("idids", [
  this.currentRepas.entree?.idPlat,
  this.currentRepas.principale?.idPlat,
  this.currentRepas.dessert?.idPlat,])
    console.log('final Repas', {
      
      typeRepas: this.timeFor,
      plats: [
        this.currentRepas.entree?.idPlat,
        this.currentRepas.principale?.idPlat,
        this.currentRepas.dessert?.idPlat,
      ],
    });
  }
  likePlat(platId: any): void {
    this.platService.likeDislike(this.patient_Connecter.idpatient, platId, 'LIKE').subscribe(
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
    this.platService.likeDislike(this.patient_Connecter.idpatient, platId, 'DISLIKE').subscribe(
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
