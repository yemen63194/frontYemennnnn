import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaladieService } from 'src/app/services/maladie.service';

@Component({
  selector: 'app-modifier-maladie',
  templateUrl: './modifier-maladie.component.html',
  styleUrls: ['./modifier-maladie.component.css']
})
export class ModifierMaladieComponent {

  constructor(private service:MaladieService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
mal:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {

    this.mal={
      mal:null,
    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getMaladie(this.id).subscribe(p =>{
      console.log(p);
      this.mal = p;
    
    });
  
  }


  modifierMaladie(){
    this.service.modifierMaladie(this.mal,).subscribe(
      res => {
        this.mal = {
          nom: ''
        
        };
        console.log(res)
        this.router.navigate(['/admin/listeMaladies']);

      },
      err => {
        console.log(err); 
      }
    );





  }


}
