import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-update-shelter',
  templateUrl: './update-shelter.component.html',
  styleUrls: ['./update-shelter.component.css']
})
export class UpdateShelterComponent {
  shelter:any ;
  id :any;
  selectedImageFile: File | undefined;

  constructor(private upload:BrahmiUploadService,private act : ActivatedRoute , private _shared : ShelterService, private router :Router){
  
  }
 
  ngOnInit():void {
    this.id = this.act.snapshot.paramMap.get('id');
  
    this._shared.getShelterById(this.id)
    .subscribe(
      res => {
        this.shelter = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.upload.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.shelter.image = response.imageURL;
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
  update(){
    this.ajouterImage(() => {

    this._shared.updateShelter(this.shelter)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/listShelter']);
      },
      err => {
        console.log(err);
      }
    );
  });
  }
}
