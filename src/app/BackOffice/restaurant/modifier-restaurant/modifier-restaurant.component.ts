import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-modifier-restaurant',
  templateUrl: './modifier-restaurant.component.html',
  styleUrls: ['./modifier-restaurant.component.css']
})
export class ModifierRestaurantComponent {
 
  constructor(private upload:BrahmiUploadService,private service:RestaurantService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
  res:any
  id:any
  etablissements: any[] = [];
  selectedImageFile: File | undefined;

  routeSub!: Subscription;
  ngOnInit(): void {

    this.res={
          idRestaurant:null,
          nomResto: null,
          image:null,
          address: null,
          tel: null,
          idEtab:null,
          nomEtab:null
    }
    this.service.listeEtablissementNull().subscribe(res => {
      this.etablissements = res;
    });  
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });

     this.service.getRestaurant(this.id).subscribe(p =>{
      console.log(p);
      this.res = p;
    
    });
  
  }
  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }

  modifierRestaurant(){
    this.ajouterImage(() => {

    this.service.modifierRestaurantDTO(this.id,this.res).subscribe(
      res => {
        this.res = {
          idRestaurant:this.id,
          nomResto: '',
          image:'',
          address: '',
          tel: 0,
          idEtab:0,
          nomEtab:''
        };
        console.log(res)

      },
      err => {
        console.log(err); 
      }
      
    );
  });

    this.router.navigate(['/admin/Listerestos']);

  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.upload.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.res.image = response.imageURL;
          } else {
            console.error('Error: Image URL not found in response.');
          }
          callback();
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
}
