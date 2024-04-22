import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent implements OnInit {
  etablissements: any[] = [];
  selectedImageFile: File | undefined;
  imageURL: string | undefined;

  constructor(private srvc: BrahmiUploadService, private service: RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.service.listeEtablissementNull().subscribe(res => {
      this.etablissements = res;
    });
  }

  med = {
    nomResto: '',
    address: '',
    image: '',
    tel: 0,
    idEtab: null // Utilisez la même propriété idEtab ici
  };
  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.srvc.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.med.image = response.imageURL;

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
  ajouterRestaurant() {
    this.ajouterImage(() => {
      this.service.ajouterRestaurant(this.med).subscribe(
        res => {
          this.med = {
            nomResto: '',
            image: '',
            address: "",
            tel: 0,
            idEtab: null
          };
          console.log(res)


        },
        err => {
          console.log(err);
        }
      );
    });
    this.router.navigate(['/admin/Listerestos'])
  }
}
