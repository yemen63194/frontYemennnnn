import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-update-cause',
  templateUrl: './update-cause.component.html',
  styleUrls: ['./update-cause.component.css']
})
export class UpdateCauseComponent {
  shelter: any;
  id: any;

  constructor(private act: ActivatedRoute, private _shared: ShelterService, private router: Router) {}

  update() {
    this._shared.updateCauseInShelter(this.id, this.shelter)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/listCause']);
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {
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
}
