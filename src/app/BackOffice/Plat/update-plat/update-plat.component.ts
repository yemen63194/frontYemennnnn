import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent {

  constructor(private upload:BrahmiUploadService,private service:PlatService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
  plats:any
  id:any
  selectedImageFile: File | undefined;


  routeSub!: Subscription;
  ngOnInit(): void {

    this.plats={
      nomPlat: null,
      descPlat: null,
      image:null,
      typePlat: null,
      typeRepas: null,
      prixPlat: null

    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getPlat(this.id).subscribe(p =>{
      console.log(p);
      this.plats = p;
    
    });
  
  }
  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }

  modifierPlats(){
    this.ajouterImage(() => {

    this.service.modifierPlats(this.plats,).subscribe(
      res => {
        this.plats = {
          nomPlat: '',
          descPlat: '',
          image: '',
          typePlat: '',
          typeRepas: '',
          prixPlat: ''
        
        };
        console.log(res)
        this.router.navigate(['/admin/listePlats']);

      },
      err => {
        console.log(err); 
      }
    );
  });
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.upload.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.plats.image = response.imageURL;
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
