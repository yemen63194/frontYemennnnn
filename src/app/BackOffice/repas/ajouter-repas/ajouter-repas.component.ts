import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';
import { RepasService } from 'src/app/services/repas.service';

@Component({
  selector: 'app-ajouter-repas',
  templateUrl: './ajouter-repas.component.html',
  styleUrls: ['./ajouter-repas.component.css']
})
export class AjouterRepasComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  plats: any[] = [];


  repas: {
    typeRepas: string,
    pl: any[]
  } = {
    typeRepas: '',
    pl: []
  };
  constructor(private service: RepasService, private serv: PlatService, private router: Router) { }

  ngOnInit(): void {
    this.serv.listePlats().subscribe(res => {
      console.log(res);
      this.plats = res;
    });
  }

  controleIngredient(plats: any) {
    const index = this.repas.pl.findIndex(ing => ing.idIngredient === plats.idIngredient);
    if (index !== -1) {
      this.repas.pl.splice(index, 1);
    } else {
      this.repas.pl.push(plats);
    }
  }

  addPlatToRepas(repas: any) {
    this.repas.pl.push(repas);
  }

  ajouterRepas(){
    

  }





}
