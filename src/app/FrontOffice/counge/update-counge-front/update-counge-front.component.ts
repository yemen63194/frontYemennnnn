import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoungeService } from 'src/app/services/counge.service';

@Component({
  selector: 'app-update-counge-front',
  templateUrl: './update-counge-front.component.html',
  styleUrls: ['./update-counge-front.component.css']
})
export class UpdateCoungeFrontComponent {
  constructor(private service:CoungeService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
etab:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {

    this.etab={
      id:null,
      description:null,
      dateDebut:null,
  
      dateFin: null,
      typeEtab: null,
      typeCounger: null

    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getCounge(this.id).subscribe(p =>{
      console.log(p);
      this.etab = p;
    
    });
  
  }


  modifierEtablissement(){
    console.log("aa")

    this.service.modifierCounge(3,this.etab).subscribe(
      res => {
        this.etab = {
          id:'',
          description:'',
          dateDebut:'',
      
          dateFin: '',
          typeEtab: '',
          typeCounger: ''

        };
        console.log(res)
        console.log(this.etab.id)

        this.router.navigate(['/FrontlisteCounges']);

      },
      err => {
        console.log(err); 
      }
    );
  }
}
