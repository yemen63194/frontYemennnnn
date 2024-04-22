import { Component } from '@angular/core';
import { AideService } from 'src/app/services/aide.service';

@Component({
  selector: 'app-list-aide',
  templateUrl: './list-aide.component.html',
  styleUrls: ['./list-aide.component.css']
})
export class ListAideComponent {
  aides: any; 
  constructor(public _shared: AideService) {}

  ngOnInit(): void {
    this._shared.getAllAides()
      .subscribe(
        res => {
          console.log(res);
          this.aides = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }

  delete(id: number) {
    console.log("Deleting aide with ID:", id);
    this._shared.deleteAide(id)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      ); 
  }
}
