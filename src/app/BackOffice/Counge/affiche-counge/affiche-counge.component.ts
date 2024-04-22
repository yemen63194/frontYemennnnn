import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoungeService } from 'src/app/services/counge.service';

@Component({
  selector: 'app-affiche-counge',
  templateUrl: './affiche-counge.component.html',
  styleUrls: ['./affiche-counge.component.css']
})
export class AfficheCoungeComponent {
  searchText: string = '';
  page: number = 1; // Page actuelle
  pageSize: number = 2;
  counges: any; 
  constructor(private shared: CoungeService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listeCounge()
      .subscribe(
        res => {
          console.log(res);
          this.counges = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }
  updateCoungeEtat(id: number, newEtat: string) {
    this.shared.updateCoungeEtat(id, newEtat).subscribe(
      () => {
        console.log('État du congé mis à jour avec succès.');
        window.location.reload();
      },
      error => {
        console.error('Erreur lors de la mise à jour de l\'état du congé:', error);
      }
    );
  }

  buttonModifier(id:any){
    this.router.navigate(['admin/UpdateCounges/'+id])
  }
}
