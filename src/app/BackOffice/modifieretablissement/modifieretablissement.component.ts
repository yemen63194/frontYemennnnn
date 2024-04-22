import { Component } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';
import { Subscription } from 'rxjs';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-modifieretablissement',
  templateUrl: './modifieretablissement.component.html',
  styleUrls: ['./modifieretablissement.component.css']
})
export class ModifieretablissementComponent {
  constructor(private service:EtablissementService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
etab:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {

    this.etab={
      idEtab:null,
      nomEtab:null,
      numFixe:null,
  
      adresse: null,
      typeEtab: null,
      nbLits: null,
      prixNuit: null

    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getEtablissement(this.id).subscribe(p =>{
      console.log(p);
      this.etab = p;
    
    });
  
  }


  modifierEtablissement(){
    this.service.modifierEtablissement(this.etab,).subscribe(
      res => {
        this.etab = {
          nomEtab: '',
          numFixe: "",
          adresse: "",
          typeEtab: "",
          nbLits: 0,
          prixNuit: 0.0
        
        };
        console.log(res)
        this.router.navigate(['/admin/listeEtablissement']);

      },
      err => {
        console.log(err); 
      }
    );





  }
}
