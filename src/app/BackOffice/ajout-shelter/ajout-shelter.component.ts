import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-ajout-shelter',
  templateUrl: './ajout-shelter.component.html',
  styleUrls: ['./ajout-shelter.component.css']
})
export class AjoutShelterComponent {
  selectedImageFile: File | undefined;
  imageURL: string | undefined;
  constructor( private srvc: BrahmiUploadService,public _shared: ShelterService,private router :Router) {}

  shelter = {
    nomShelter: '',
    capaciteShelter: 0,
    location: '',
    description:'',
    tel:'',
    image:'',
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
            this.shelter.image  = response.imageURL;
           
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


  ajout() {
    this.ajouterImage(() => {

    this._shared.createNewShelter(this.shelter)
      .subscribe(
        res => {
          this.shelter = {
            nomShelter: '',
            capaciteShelter: 0,
            location: '',
            description:'',
            tel:'',
            image:'',
          };
          this.router.navigate(['/admin/listShelter']);

        },
        err => {
          console.log(err); 
        }
      );
    });
  }

}
